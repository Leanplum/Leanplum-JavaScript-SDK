import { exec } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import Leanplum from '../src/LeanplumInternal';

async function run() {
  const allMethods = Object.getOwnPropertyNames(Leanplum.prototype);
  // hack: createRequest is the first private method, thus slicing all public ones, removing the constructor (first field)
  const publicMethods = allMethods.slice(1, allMethods.indexOf('createRequest'));

  const execAll = (commands: string[]): Promise<any[]> =>
    Promise.all(
      commands.map((command: string) =>
        new Promise((resolve, reject) =>
          exec(command, { encoding: 'utf-8' }, (err: any, out: any) =>
            err ? reject(err.message) : resolve(out.trim())))));

  const [ version, sha ] = await execAll([
    'npm show leanplum-sdk version',
    'git rev-parse HEAD'
    // git submodule update --init
  ]);

  // TODO: fetch submodule repo


  const template = readFileSync('./build/gtm-template.tpl', { encoding: 'utf-8' })
    .replace(/{LP_SDK_VERSION}/g, version)
    .replace(/{LP_SDK_METHODS}/g, JSON.stringify(publicMethods));

  writeFileSync('./gtm-lp-tag/template.tpl', template);

  // TODO: update metadata with sha
  console.log(sha);

  // TODO: push submodule
}

run();
