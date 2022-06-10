import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	assetsInclude: ['**/*.gltf'],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@Colors': path.resolve(__dirname, './src/lib/colors'),
			'@Types': path.resolve(__dirname, './src/lib/types'),
		},
	}
})