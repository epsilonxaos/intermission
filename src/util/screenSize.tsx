import { useEffect, useState } from 'react'

// Definir los breakpoints de Tailwind CSS
const breakpoints = {
	xs: 0,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536,
}

type Breakpoint = keyof typeof breakpoints

export default function useScreenSize() {
	const [screenSize, setScreenSize] = useState<{ breakpoint: Breakpoint }>({ breakpoint: 'xs' })

	useEffect(() => {
		const getBreakpoint = (width: number): Breakpoint => {
			if (width >= breakpoints['2xl']) return '2xl'
			if (width >= breakpoints.xl) return 'xl'
			if (width >= breakpoints.lg) return 'lg'
			if (width >= breakpoints.md) return 'md'
			if (width >= breakpoints.sm) return 'sm'
			return 'xs'
		}

		const updateDimension = () => {
			setScreenSize({
				breakpoint: getBreakpoint(window.innerWidth),
			})
		}

		// Inicializar con las dimensiones actuales
		updateDimension()

		window.addEventListener('resize', updateDimension)

		return () => {
			window.removeEventListener('resize', updateDimension)
		}
	}, [])

	return {
		...screenSize,
	}
}
