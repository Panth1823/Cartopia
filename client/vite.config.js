import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,  // Process all .js, .jsx, .ts, and .tsx files in the src directory
    exclude: /node_modules/,       // Exclude the node_modules directory
  },
  server: {
    port: 3000,  // Optional: Specify the port
  },
  build: {
    outDir: 'build',  // Optional: Specify the output directory
  }
});
