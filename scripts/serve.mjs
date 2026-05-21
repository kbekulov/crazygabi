import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = normalize(join(dirname(fileURLToPath(import.meta.url)), ".."));
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

createServer((req, res) => {
  const url = new URL(req.url || "/", `http://localhost:${port}`);
  const requestPath = decodeURIComponent(url.pathname);
  const safePath = normalize(join(root, requestPath === "/" ? "index.html" : requestPath));

  if (!safePath.startsWith(root) || !existsSync(safePath) || statSync(safePath).isDirectory()) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  res.writeHead(200, { "Content-Type": types[extname(safePath)] || "application/octet-stream" });
  createReadStream(safePath).pipe(res);
}).listen(port, () => {
  console.log(`Crazy Gabi running at http://localhost:${port}`);
});
