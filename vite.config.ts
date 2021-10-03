import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  esbuild: {
    jsxInject: `import * as React from 'react';`,
  },
  build: {
    target: 'es2016',
  },
});
