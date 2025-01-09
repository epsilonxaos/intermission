/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				main: "#F7F7F7",
				"secon-red": "#D70000",
				"secon-blue": "#003484",
				"secon-green": "#00704F",
			},
			fontFamily: {
				itc: ["ITC Berkeley Oldstyle Std", "sans-serif"],
			},
			minHeight: {
				hero: "80vh",
			},
			maxWidth: {
				app: "1520px",
				section: "1440px",
				navbar: "800px",
			},
			maxHeight: {
				footer: "640px",
			},
			backgroundImage: (theme) => ({
				"hero-content": "url('/imgs/fondo_circulo.png')",
				"hero-animation": "url('/imgs/Animacion_Intermission.gif')",
				"footer-animation": "url('/imgs/.png')",
				"main-background": "url('/imgs/fondo_negro.png')",
			}),
		},
	},
	daisyui: {
		themes: ["cupcake"],
	},
};
