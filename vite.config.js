/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/",

	resolve: {
		alias: [
			{ find: '@fonts', replacement: resolve(__dirname, 'src/assets/fonts') },
			{ find: '@common', replacement: resolve(__dirname, 'src/assets/scss/common.scss') },
			{ find: '@variables', replacement: resolve(__dirname, 'src/assets/scss/variables.scss') },
			{ find: '@img', replacement: resolve(__dirname, 'src/assets/img/') },

			{ find: '@path', replacement: resolve(__dirname, 'src/components/') },
			{ find: '@pathData', replacement: resolve(__dirname, 'src/pages/') }



		]
	}
});