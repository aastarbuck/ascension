
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// Use 'hybrid' or 'server' if you want the /keystatic admin route available in runtime.
// Use 'static' if you will NOT serve /keystatic in production (admin only in dev/elsewhere).
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'hybrid',
});
