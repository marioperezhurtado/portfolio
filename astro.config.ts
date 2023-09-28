import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import rehypePrettyCode, {type Options } from 'rehype-pretty-code'

const prettyCodeOptions = {
  theme: 'poimandres',
} satisfies Options;

// https://astro.build/config
export default defineConfig({
  site: 'https://marioph.com',
  integrations: [
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    }),
    tailwind(),
    svelte(),
  ]
})
