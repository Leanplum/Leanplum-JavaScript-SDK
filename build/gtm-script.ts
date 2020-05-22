import { exec } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import Leanplum from '../src/LeanplumInternal';

const SUBMODULE_PATH = './gtm-tag';
const GTM_REPO = 'git@github.com:Leanplum/Leanplum-GTM-Tag.git';

const readText = (filename: string): string =>
  readFileSync(filename, { encoding: 'utf-8' });

const promiseExecution = (command: string): Promise<any> =>
  new Promise((resolve, reject) =>
    exec(command, { encoding: 'utf-8' }, (err: any, out: any) =>
      err ? reject(err.message) : resolve(out.trim())));

const execParallel = (commands: string[]): Promise<any[]> =>
  Promise.all(commands.map(promiseExecution))

const execSequential = (commands: string[]): Promise<any> =>
  commands.reduce((promise: Promise<any>, command: string) =>
    promise.then(() => promiseExecution(command)),
    Promise.resolve()
  )

async function run() {
  const allMethods = Object.getOwnPropertyNames(Leanplum.prototype);
  // hack: createRequest is the first private method, thus slicing all public ones, removing the constructor (first field)
  const publicMethods = allMethods.slice(1, allMethods.indexOf('createRequest'));
  let [ version ] = await execParallel([
    'npm show leanplum-sdk version',
    `git clone ${GTM_REPO} ${SUBMODULE_PATH}`
  ]);

  if (!(/^\d+\.\d+\.\d+$/).test(version)) {
    throw new Error(`Could not parse version: ${version}`);
  }

  const releaseInfo = await execSequential([
    `curl https://api.github.com/repos/Leanplum/Leanplum-JavaScript-SDK/releases/tags/${version}`
  ]);
  const releaseNotes =
    JSON.parse(releaseInfo).body
      .split(/\r?\n/)
      .filter(line => !!line.trim())
      .join('\n     ');

  await execSequential([
    `git -C ${SUBMODULE_PATH} checkout master`,
  ]);

  const template = readText('./build/gtm-template.tpl')
    .replace(/{LP_SDK_VERSION}/g, version)
    .replace(/{LP_SDK_METHODS}/g, JSON.stringify(publicMethods));
  writeFileSync(`${SUBMODULE_PATH}/template.tpl`, template);

  const sha = await execSequential([
    `git -C ${SUBMODULE_PATH} add .`,
    `git -C ${SUBMODULE_PATH} commit -m "chore: update SDK to ${version}"`,
    `git -C ${SUBMODULE_PATH} rev-parse HEAD`
  ]);

  let metadata = readText(`${SUBMODULE_PATH}/metadata.yaml`);
  if (metadata.indexOf(sha) < 0) {
    const lines = metadata.split('\n');
    lines.splice(
      lines.indexOf('versions:') + 1,
      0,
      ` - sha: ${sha}`,
      `   changeNotes: |2\n     ${releaseNotes}`
    );
    metadata = lines.join('\n');
  }
  writeFileSync(`${SUBMODULE_PATH}/metadata.yaml`, metadata);

  await execSequential([
    `git -C ${SUBMODULE_PATH} add .`,
    `git -C ${SUBMODULE_PATH} commit -m "chore: publish release with SDD ${version}"`,
    `git -C ${SUBMODULE_PATH} push`,
    `rm -rf ${SUBMODULE_PATH}`
  ]);

  console.log('GTM tag update successful.');
}

run();
