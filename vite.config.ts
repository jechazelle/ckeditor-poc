import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';


export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
      refresh: true,
    }),
    react(),
    ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } ),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
  /* define: {
    // Some libraries use the global object, even though it doesn't exist in the browser.
    // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
    // https://github.com/vitejs/vite/discussions/5912
    global: {},
  }, */
});
