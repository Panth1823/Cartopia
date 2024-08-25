import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: /node_modules/,
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    target: 'esnext',
  }
});
