import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter-node is used for production builds
        adapter: adapter({
            // default options are shown
            out: 'build',
            precompress: false,
            envPrefix: '',
            polyfill: true
        })
    },

    // Enable vite preprocessing for components
    preprocess: vitePreprocess()
};

export default config;
