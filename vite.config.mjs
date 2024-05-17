import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/* import basicSsl from '@vitejs/plugin-basic-ssl' */
import dns from 'dns'
import tsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: 'localhost',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
