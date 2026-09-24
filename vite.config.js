import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths so assets load correctly on GitHub Pages (/dict/)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
