import path from 'path';
import fs from 'fs/promises';
import { PackageJSON } from '~/types/packageJson';
import { spawn} from 'child_process';

export async function loadProject(): Promise<PackageJSON> {
  const __dirname = process.cwd();
  console.log('__dirname', __dirname);

  const packageJsonPath = path.join(__dirname, 'package.json');
  return fs.readFile(packageJsonPath, { encoding: 'utf8' })
    .then(result => JSON.parse(result) as PackageJSON);
}

export function runScript(script: string) {
  const command = `npm run ${script}`;
  console.log(command);
  const process = spawn(command);
  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}