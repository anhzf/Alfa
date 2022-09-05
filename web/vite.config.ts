import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		UnoCSS('uno.config.ts'),
		Components({
			dts: './src/components.d.ts',
			resolvers: [
				componentName => {
					// Default to solid
					if (componentName.endsWith('Icon')) {
						if (componentName.startsWith('Outline')) {
							return {
								name: componentName.slice(7),
								from: '@heroicons/vue/24/outline',
							};
						}

						if (componentName.startsWith('Mini')) {
							return {
								name: componentName.slice(4),
								from: '@heroicons/vue/20/solid',
							};
						}

						return {
							name: componentName,
							from: '@heroicons/vue/24/solid',
						};
					}

					return undefined;
				},
			],
		}),
	],
});
