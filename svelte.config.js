import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $lib: resolve('./src/lib'),
          $data: resolve('./src/data'),
          $routes: resolve('./src/routes'),
          $stores: resolve('./src/stores'),
        }
      }
    }
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
