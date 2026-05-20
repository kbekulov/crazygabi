import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const projectRoot = process.cwd();
const port = getPort(process.argv);

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.svg', 'image/svg+xml']
]);

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', `http://${request.headers.host}`);

    if (url.pathname === '/' || url.pathname === '/index.html') {
      const html = await readFile(join(projectRoot, 'app.html'), 'utf8');
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(
        html.replace(
          '<script type="module" src="./src/main.ts"></script>',
          '<link rel="stylesheet" href="/dev.css" /><script type="module" src="/dev.js"></script>'
        )
      );
      return;
    }

    if (url.pathname === '/dev.js' || url.pathname === '/dev.css') {
      const result = await build({
        absWorkingDir: projectRoot,
        bundle: true,
        entryPoints: ['src/main.ts'],
        format: 'esm',
        loader: { '.ts': 'ts', '.css': 'css' },
        minify: false,
        outfile: 'dev.js',
        platform: 'browser',
        sourcemap: 'inline',
        write: false
      });
      const file = result.outputFiles.find((output) => output.path.endsWith(url.pathname));
      if (!file) {
        response.writeHead(404);
        response.end('Not found');
        return;
      }

      response.writeHead(200, {
        'Content-Type': url.pathname.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/javascript; charset=utf-8'
      });
      response.end(file.text);
      return;
    }

    const filePath = join(projectRoot, url.pathname.replace(/^\/+/, ''));
    const file = await readFile(filePath);
    response.writeHead(200, { 'Content-Type': mimeTypes.get(extname(filePath)) ?? 'application/octet-stream' });
    response.end(file);
  } catch (error) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(error instanceof Error ? error.message : 'Not found');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Crazy Gabi dev server running at http://localhost:${port}/`);
  console.log(`Serving ${pathToFileURL(projectRoot).href}`);
});

function getPort(args) {
  const portFlag = args.findIndex((arg) => arg === '--port');
  if (portFlag >= 0 && args[portFlag + 1]) {
    return Number(args[portFlag + 1]);
  }

  const inlinePort = args.find((arg) => arg.startsWith('--port='));
  if (inlinePort) {
    return Number(inlinePort.split('=')[1]);
  }

  return 5173;
}
