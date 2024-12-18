/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				space: ['Space Mono', 'monospace'],
				funnel: ['Funnel Sans', 'sans-serif'],
				oswald: ['Oswald', 'sans-serif'],
				Lexand: ['Lexend Peta', 'sans-serif'],
			},
			height: {
			  'custom': '52px', // Ajusta este valor según lo que consideres un tamaño medio (13 * 4px = 52px)
			},
		}
	},
	plugins: [],
}