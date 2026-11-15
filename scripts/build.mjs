// scripts/build.mjs
// Runs the Vite production build and exits cleanly.
// Wrapping in a script ensures process.exit(0) so the build never hangs.
import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

await build();

const p404Dir = path.resolve('dist/404/index.html');
const p404Root = path.resolve('dist/404.html');
if (fs.existsSync(p404Dir)) {
  fs.copyFileSync(p404Dir, p404Root);
}

process.exit(0);
