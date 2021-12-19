import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		ViteComponents({
			customComponentResolvers: [AntDesignVueResolver()],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment'
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					'primary-color': '#223717',
					'border-radius-base': '2px',
				},
				javascriptEnabled: true,
			}
		}
	}
})
