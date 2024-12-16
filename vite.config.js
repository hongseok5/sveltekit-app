import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 8080
	},
	build: {
		
	},
	resolve: {
		alias: {
			$db: path.resolve('./src/db')
		}
	}
});
