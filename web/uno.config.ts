import {
	defineConfig, presetUno, presetWebFonts, transformerDirectives,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Inter:400,500,600,700',
			},
		}),
	],
	transformers: [
		transformerDirectives(),
	],
});
