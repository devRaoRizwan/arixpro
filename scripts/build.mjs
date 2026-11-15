// scripts/build.mjs
// Runs the Vite production build and exits cleanly.
// Wrapping in a script ensures process.exit(0) so the build never hangs.
import { build } from 'vite';

await build();
process.exit(0);
