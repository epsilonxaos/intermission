/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				main: "#FFFFFF",
				"secon-r": "#D70000",
				"secon-b": "#003484",
				"secon-g": "#00704F",
				"extra": "#5C8BD5"
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
				"hero-content-home": "url('/imgs/fondo_circulo_1.png')",
				"hero-animation-home": "url('/imgs/Animacion_Intermission.gif')",
				"footer-animation": "url('/imgs/.png')",
				"main-background": "url('/imgs/fondo_negro.png')",
			}),
			transitionDuration: {
				DEFAULT: "300ms",
			},
			animation: {
				'waving-balls': 'wave-balls 2s linear infinite',
				"fading-in": "fade-in var(--transition-duration, 300ms) ease-out",
				"scrolling-left": "scroll_left var(--animation-duration, 300ms) linear infinite",
				"scrolling-right": "scroll_right var(--animation-duration, 300ms) linear infinite",
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
				scroll_left: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-1 * var(--scroll-width)))' },
				},
				scroll_right: {
					'0%': { transform: 'translateX(calc(-1 * var(--scroll-width)))' },
					'100%': { transform: 'translateX(0)' },
				},

			}

		},
	},
	daisyui: {
		themes: ["cupcake"],
	},
};
