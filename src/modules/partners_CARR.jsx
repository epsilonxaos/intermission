import { ButtonForLink } from '@components/Button'
import { Image } from '@components/Image'
import { TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import { twMerge } from 'tailwind-merge'

import { useEffect, useRef, useState } from 'react'

const PartnersCarousel = ({ imgs, screenSize }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const carruselRef = useRef(null)
	const handlePrev = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? imgs.length - 3 : prevIndex - 1))
	}
	const handleNext = () => {
		setCurrentIndex(prevIndex => (prevIndex === imgs.length - 3 ? 0 : prevIndex + 1))
	}

	useEffect(() => {
		if (screenSize === 'xs') {
			setCurrentIndex(0)
		}
	}, [screenSize])

    return (
        // CUIDADO, NO TIENE OVERFLOW HIDDEN para pantallas pequeñas
		<section className='relative flex w-full flex-col place-items-center gap-y-4 sm:flex-row'>
			<div
				ref={carruselRef}
				className={twMerge('w-full overflow-hidden', screenSize === 'xs' ? 'w-[125vw]' : '')}>
				<div
					className={twMerge('flex py-4 transition-transform duration-700 ease-in-out')}
					style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
					{imgs.map((imgSrc, idx) => (
						<article
							key={idx}
							className={'flex min-h-[200px] w-1/3 flex-shrink-0 px-4 lg:px-8'}>
							<Image
								className={twMerge(
									'min-w-[100px] object-center transition-transform duration-700 ease-in-out',
									// SI primero => SI ultimo => en medio
									// Primero&&Ultimo: desplazan
									// En medio: escala mayor
									idx === currentIndex
										? '-translate-x-4 lg:-translate-x-8'
										: idx === currentIndex + 2
											? 'translate-x-4 lg:translate-x-8'
											: idx === currentIndex + 1
												? 'scale-125'
												: ''
								)}
								src={imgSrc}
								alt={`Proyectos realizados por los Partners de Intermission`}
								objectFit='cover'
							/>
						</article>
					))}
				</div>
			</div>

			<div className='z-10 flex w-full justify-between sm:absolute sm:scale-[107%] md:scale-105'>
				<div
					onClick={handlePrev}
					className='h-[19px] w-[25px]'>
					<Image
						className='rotate-180'
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Flecha izquierda de carrusel para Partners de Intermission`}
						objectFit='contain'
					/>
				</div>
				<div
					onClick={handleNext}
					className='h-[19px] w-[25px]'>
					<Image
						className=''
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Flecha derecha de carrusel para Partners de Intermission`}
						objectFit='contain'
					/>
				</div>
			</div>
		</section>
	)
}

export default PartnersCarousel
