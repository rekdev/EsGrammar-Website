/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'esgrammar-dark': {
				100: '#0d0d0dff',
				200: '#121212ff',
				300: '#242424ff',
				400: '#383838ff',
				500: '#4d4d4dff',
				600: '#5c5c5cff',
				700: '#737373ff',
			},
			'esgrammar-light': {
				100: '#f2f2f2ff',
				200: '#e8e8e8ff',
				300: '#d9d9d9ff',
				400: '#d9d9d9ff',
				500: '#c2c2c2ff',
				600: '#bdbdbdff',
				700: '#a8a8a8ff',
			},
		},
		fontFamily: {
			'noto-sans': ['Noto Sans', 'sans-serif'],
		},
		extend: {},
	},
	// darkMode: "selector",
	plugins: [],
}
