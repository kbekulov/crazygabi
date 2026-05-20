import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  optimizeDeps: {
    entries: ['src/main.ts'],
    include: ['phaser']
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
}));
