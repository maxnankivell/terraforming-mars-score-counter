/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cadmiumOrange: {
					DEFAULT: '#E98B43',
					100: '#f2b98e',
					200: '#f0ae7b',
					300: '#eda269',
					400: '#eb9756',
					500: '#E98B43',
					600: '#d27d3c',
					700: '#ba6f36',
					800: '#a3612f',
					900: '#8c5328'
				},
				champagne: {
					DEFAULT: '#F9E5CB',
					100: '#fbefe0',
					200: '#fbeddb',
					300: '#faead5',
					400: '#fae8d0',
					500: '#F9E5CB',
					600: '#e0ceb7',
					700: '#c7b7a2',
					800: '#aea08e',
					900: '#95897a'
				},
				grayWeb: {
					DEFAULT: '#797B84',
					100: '#afb0b5',
					200: '#a1a3a9',
					300: '#94959d',
					400: '#868890',
					500: '#797B84',
					600: '#6d6f77',
					700: '#61626a',
					800: '#55565c',
					900: '#494a4f'
				},
				darkOliveGreen: {
					DEFAULT: '#596842',
					100: '#9ba48e',
					200: '#8b957b',
					300: '#7a8668',
					400: '#6a7755',
					500: '#596842',
					600: '#505e3b',
					700: '#475335',
					800: '#3e492e',
					900: '#353e28'
				}
			}
		}
	},
	plugins: []
};
