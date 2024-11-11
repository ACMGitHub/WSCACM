export default {
	plugins: [],
	theme: {
		extend: {
			backgroundImage: {
				circuitboard: "url('/images/circuit-board.jpeg')"
			},
			screens: {
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }

				'3xl': '1792px'
				// => @media (min-width: 1792px) { ... }
			}
		}
	},
	purge: ['./index.html', './src/**/*.{svelte,js,ts}'], //for unused css
	variants: {
		extend: {}
	},
	darkmode: 'media' // or 'media' or 'class'
};
