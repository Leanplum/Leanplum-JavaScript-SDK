import { exec } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const GTM_REPO_PATH = './gtm-tag';
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
  const publicMethods = [ "setApiPath", "setEmail", "setNetworkTimeout", "setAppIdForDevelopmentMode", "setAppIdForProductionMode", "setSocketHost", "setDeviceId", "setLocale", "setAppVersion", "setDeviceName", "setDeviceModel", "setRequestBatching", "setSystemName", "setSystemVersion", "setVariables", "setVariantDebugInfoEnabled", "enableRichInAppMessages", "processMessageEvent", "getVariantDebugInfo", "getVariables", "getVariable", "getVariants", "inbox", "addStartResponseHandler", "removeStartResponseHandler", "addVariablesChangedHandler", "removeVariablesChangedHandler", "forceContentUpdate", "useSessionLength", "start", "startFromCache", "stop", "pauseSession", "resumeSession", "pauseState", "resumeState", "getUserId", "setUserId", "setUserAttributes", "track", "trackPurchase", "advanceTo", "isWebPushSupported", "isWebPushSubscribed", "setWebPushOptions", "registerForWebPush", "unregisterFromWebPush", "clearUserContent", "defineAction", "applyQueue", "on", "off", "getFileUrl"];
  let [ version ] = await execParallel([
    'npm show leanplum-sdk version',
    `git clone ${GTM_REPO} ${GTM_REPO_PATH}`
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
    `git -C ${GTM_REPO_PATH} checkout master`,
  ]);

  const template = readText('./build/gtm-template.tpl')
    .replace(/{LP_SDK_VERSION}/g, version)
    .replace(/{LP_SDK_METHODS}/g, JSON.stringify(publicMethods));
  writeFileSync(`${GTM_REPO_PATH}/template.tpl`, template);

  const sha = await execSequential([
    `git -C ${GTM_REPO_PATH} add .`,
    `git -C ${GTM_REPO_PATH} commit -m "chore: update SDK to ${version}"`,
    `git -C ${GTM_REPO_PATH} rev-parse HEAD`
  ]);

  let metadata = readText(`${GTM_REPO_PATH}/metadata.yaml`);
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
  writeFileSync(`${GTM_REPO_PATH}/metadata.yaml`, metadata);

  await execSequential([
    `git -C ${GTM_REPO_PATH} add .`,
    `git -C ${GTM_REPO_PATH} commit -m "chore: publish release with SDK ${version}"`,
    `git -C ${GTM_REPO_PATH} push`,
    `rm -rf ${GTM_REPO_PATH}`
  ]);

  console.log('GTM tag update successful.');
}

run();
