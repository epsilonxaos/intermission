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
				"section-content": "1200px",
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
			transitionDuration: {
				DEFAULT: "300ms",
			},
			animation: {
				'waving-balls': 'wave-balls 2s linear infinite',
				"fading-in": "fade-in var(--transition-duration, 300ms) ease-out",
				"scrolling": "scroll var(--animation-duration, 300ms) linear infinite"
			},
			keyframes: {
				"wave-balls": {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
				},
				"fade-in": {
					from: {
						opacity: "0",
						transform: "translateY(var(--translateY-initial, -10px))",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-1 * var(--scroll-width)))' },
				},

			}

		},
	},
	daisyui: {
		themes: ["cupcake"],
	},
};
