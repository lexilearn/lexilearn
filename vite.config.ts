import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	plugins: [
    sveltekit(),
  ]
});
