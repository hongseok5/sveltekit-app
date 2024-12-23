import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";
/*
export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['tests/*.test.js'], // src 폴더 내 모든 *.test.js 파일을 테스트 대상으로 지정
		globals: true, // Jest 스타일 전역 사용 가능
		environment: 'jsdom', // DOM 관련 테스트 환경
		setupFiles: './vitest.setup.js', // 테스트 전 초기화 파일
	},
	server: {
		port: 8080
	},
	build: {
		
	},
	resolve: {
		alias: {
			$db: path.resolve('./src/db')
		},
		conditions: mode === 'test' ? ['browser'] : [],
	}
});
*/



export default defineConfig(({mode}) => ({
	plugins: [sveltekit()],

	test: {
		include: ['tests/*/*.test.js'], // src 폴더 내 모든 *.test.js 파일을 테스트 대상으로 지정
		globals: true, // Jest 스타일 전역 사용 가능
		environment: 'jsdom', // DOM 관련 테스트 환경
		setupFiles: './vitest.setup.js', // 테스트 전 초기화 파일
	},
	server: {
		port: 8080
	},
	build: {
		
	},
	resolve: {
		alias: {
			$db: path.resolve('./src/db')
		},
		conditions: mode === 'test' ? ['browser'] : [],
	}
}));

