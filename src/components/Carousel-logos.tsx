import React, { useEffect, useRef } from 'react'

import { Image } from './Image'

// Asume que tienes estos logos en tu carpeta public/
// Función para tomar todas las imagenes dentro de "logos" o donde estén estos
// Así se podría modularizar. Pudiendo tener 2,3 o cuantas filas se quieran

export default function LogoCarousel({ logos, direction = 'left' }: { direction: 'left' | 'right'; logos: string[] }) {
	const carouselRef = useRef<HTMLDivElement>(null)
	const scrollAnimation = { left: 'animate-scrolling-left', right: 'animate-scrolling-right' }
	useEffect(() => {
		const carousel = carouselRef.current
		if (carousel) {
			const scrollWidth = carousel.scrollWidth * 0.5 // Se espera que haya recorrido la mitad (completo, pero como se duplicó, solo la mitad)
			const animationDuration = scrollWidth / 50 // Ajusta este valor para cambiar la velocidad

			carousel.style.setProperty('--scroll-width', `${scrollWidth}px`)
			carousel.style.setProperty('--animation-duration', `${animationDuration}s`)
		}
	}, [])

	return (
		<div className='w-full overflow-hidden'>
			<div className='relative h-full py-10'>
				{/* Contenedor del carrusel */}
				<div
					ref={carouselRef}
					className={`${scrollAnimation[direction]} flex`}
					style={
						{
							'--scroll-width': '0px',
							'--animation-duration': '0s',
						} as React.CSSProperties
					}>
					{[...logos, ...logos].map((logo, index) => (
						<div
							key={index}
							className='mx-8 flex h-20 w-40 flex-shrink-0 items-center justify-center'>
							<Image
								src={logo}
								alt={`Cliente ${index + 1}`}
								width={160}
								height={80}
								objectFit='contain'
							/>
						</div>
					))}
				</div>

				{/* DIFERENTES GRADIENTES, PROBAR con w-56 ############################################ */}
				{/* Gradiente izquierdo */}
				<div
					className='absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black to-black/0 mix-blend-multiply backdrop-blur-sm sm:w-56'
					style={{
						maskImage: 'linear-gradient(to right, black 75% , transparent 100%)',
						WebkitMaskImage: 'linear-gradient(to right, black 75%, transparent 100%)',
						// filter: 'blur(15px)',
					}}></div>

				{/* Gradiente derecho */}
				<div
					className='absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-black to-black/0 mix-blend-multiply backdrop-blur-sm sm:w-56'
					style={{
						maskImage: 'linear-gradient(to left, black 75% , transparent 100%)',
						WebkitMaskImage: 'linear-gradient(to left, black 75%, transparent 100%)',
						// filter: 'blur(15px)',
					}}></div>

				{/* ######################################################################### */}
				{/* Gradiente izquierdo */}
				{/* <div className='absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black to-transparent mix-blend-multiply backdrop-blur-sm'></div> */}
				{/* Gradiente derecho */}
				{/* <div className='absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-black to-transparent mix-blend-multiply backdrop-blur-sm'></div> */}

				{/* Otra opcion, sin el BLUR (Se podrian usar ambos, si se desea) ########### */}
				{/* Gradiente izquierdo */}
				{/* <div className='absolute left-0 top-0 h-full w-56 bg-gradient-to-r from-black to-transparent mix-blend-multiply'></div> */}
				{/* Gradiente derecho */}
				{/* <div className='absolute right-0 top-0 h-full w-56 bg-gradient-to-l from-black to-transparent mix-blend-multiply'></div> */}
			</div>
		</div>
	)
}
