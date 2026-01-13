import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [mdx(), keystatic(), react()],
  output: 'hybrid'
});