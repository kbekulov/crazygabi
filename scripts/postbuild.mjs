import { copyFile, cp, mkdir, rename, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const distApp = join(dist, 'app.html');
const distIndex = join(dist, 'index.html');

if (existsSync(distApp)) {
  await rename(distApp, distIndex);
}

await copyFile(distIndex, join(root, 'index.html'));

await rm(join(root, 'assets'), { recursive: true, force: true });
await cp(join(dist, 'assets'), join(root, 'assets'), { recursive: true });

if (existsSync(join(dist, 'CNAME'))) {
  await copyFile(join(dist, 'CNAME'), join(root, 'CNAME'));
} else {
  await mkdir(dist, { recursive: true });
  await copyFile(join(root, 'CNAME'), join(dist, 'CNAME'));
}

console.log('Published built game files to dist and repository root.');
