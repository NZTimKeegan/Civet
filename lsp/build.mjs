import { build } from 'esbuild';

const watch = process.argv.includes('--watch');
const minify = false // !watch || process.argv.includes('--minify');

build({
  entryPoints: ['source/extension.ts'],
  tsconfig: "./tsconfig.json",
  bundle: true,
  external: ['vscode'],
  format: "cjs",
  sourcemap: watch,
  minify,
  watch,
  platform: 'node',
  outfile: 'dist/extension.js',
}).catch(() => process.exit(1))

build({
  entryPoints: ['source/server.ts'],
  tsconfig: "./tsconfig.json",
  bundle: true,
  external: ['vscode'],
  sourcemap: watch,
  minify,
  watch,
  platform: 'node',
  outfile: 'dist/server.js',
}).catch(() => process.exit(1))