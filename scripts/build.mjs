import { build } from 'vite'

/**
 * Wraps `vite build` so the process actually terminates.
 *
 * With the prerender plugin in the pipeline, rolldown's worker pool is left
 * running once the bundle is written: `process.getActiveResourcesInfo()` still
 * reports a MessagePort and its pipes, so Node keeps the event loop alive and
 * the command hangs forever. The build itself is finished at that point --
 * every asset and prerendered HTML file is on disk -- so exit explicitly rather
 * than letting a deploy sit until it times out.
 */
await build()

process.exit(0)
