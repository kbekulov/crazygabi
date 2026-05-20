import { cp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();
const distDir = join(projectRoot, 'dist');
const distAppHtml = join(distDir, 'app.html');
const distIndexHtml = join(distDir, 'index.html');
const rootAssetsDir = join(projectRoot, 'assets');

if (existsSync(distAppHtml)) {
  await rename(distAppHtml, distIndexHtml);
}

let html = await readFile(distIndexHtml, 'utf8');
html = html.replaceAll('./assets/', './assets/');
await writeFile(distIndexHtml, html);

await cp(distIndexHtml, join(projectRoot, 'index.html'));
await rm(rootAssetsDir, { recursive: true, force: true });
await cp(join(distDir, 'assets'), rootAssetsDir, { recursive: true });

if (existsSync(join(distDir, 'CNAME'))) {
  await cp(join(distDir, 'CNAME'), join(projectRoot, 'CNAME'));
}

console.log('Published built game files to repository root for branch-based GitHub Pages.');
