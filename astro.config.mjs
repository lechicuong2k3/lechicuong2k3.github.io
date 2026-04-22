import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://lechicuong2k3.github.io',
  base: '/cuongchile.github.io/',
  output: 'static',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind()
  ],
  markdown: {
    remarkPlugins: [
        'remark-math',
    ],
    rehypePlugins: [
        ['rehype-katex', {
        // Katex plugin options
        }]
    ]
  }
});