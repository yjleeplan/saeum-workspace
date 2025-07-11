import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  server: {
    port: 3000,
    host: true,
  },
  build: {
    sourcemap: false,
  },
  base: command === 'build' ? process.env.VITE_BASE_URL : './',
  plugins: [react(), viteTsconfigPaths()],
}));
