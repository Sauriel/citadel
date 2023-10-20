import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import { PackageJSON } from '~/types/packageJson';
import { spawn } from 'child_process';

const IS_WINDOWS = os.platform() === 'win32';
const __dirname = process.cwd();

export async function loadProject(): Promise<PackageJSON> {
  const packageJsonPath = path.join(__dirname, 'package.json');
  return fs.readFile(packageJsonPath, { encoding: 'utf8' })
    .then(result => JSON.parse(result) as PackageJSON);
}

export function runScript(script: string) {
  const cmd = IS_WINDOWS ? 'npm.cmd' : 'npm';
  const process = spawn(cmd, ['run', script], { cwd: __dirname });
  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  // if (IS_WINDOWS) {
  //   execSync(`taskkill /F /T /PID ${process.pid}`);
  // } else {
  //   process.kill();
  // }
}