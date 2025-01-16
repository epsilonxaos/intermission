import React, { useEffect, useRef, useState } from 'react'

// import { Adorno_circulo_item, TextSpecial, TextSubcontent, TextTitle } from '@/components/ui/text'
import { Image } from './Carousel-logos'
import { TextSpecial, TextSubcontent, TextTitle } from './Text'
import Adorno_circulo_item from './circle_decoration'

interface Rubro {
	name: string
	docus: string
}

interface RubrosCarruselProps {
	rubros: Rubro[]
}

const RubrosCarrusel = ({ rubros }: RubrosCarruselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const carruselRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (carruselRef.current) {
			const scrollPosition = currentIndex * carruselRef.current.offsetWidth
			carruselRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth',
			})
		}
	}, [currentIndex])

	return (
		<>
			<TextTitle className='self-start pb-5 sm:self-end'>
				Rubros
				<Adorno_circulo_item
					size='lg-sz'
					item={{}}
				/>
			</TextTitle>
			<div className='flex w-full flex-wrap items-center justify-between gap-4 sm:gap-0'>
				<div className='dev-cnt hidden w-full sm:block'>
					<div className='flex justify-center space-x-2 py-4'>
						{rubros.map((_, index) => (
							<button
								key={index}
								// className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
								className={`h-3 w-3 rounded-full transition-colors duration-200 ${
									index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
								}`}
								onClick={() => setCurrentIndex(index)}
								aria-label={`Ver rubro ${index + 1}`}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-grow flex-row gap-3 sm:w-4/12'>
					<Image
						className='dev-cnt mt-2 max-h-[100px] w-full max-w-[100px] bg-white'
						src={`/imgs/rubros/icon_${rubros[currentIndex]!.docus}.svg`}
						alt={`Icono de ${rubros[currentIndex]!.name}`}
						// width={100}
						// height={100}
						objectFit='cover'
					/>
					<div className='flex flex-col gap-2'>
						<TextSpecial className='text-left text-base font-bold sm:text-xl lg:text-3xl'>
							{rubros[currentIndex]!.name}
						</TextSpecial>
						<TextSubcontent className='text-left sm:text-sm'>
							<span className='h-[18px] w-[18px]'>➡️</span>See More
						</TextSubcontent>
					</div>
				</div>
				<Image
					className='min-w-[300px] flex-grow sm:w-8/12'
					src={`/imgs/rubros/img_${rubros[currentIndex]!.docus}.png`}
					alt={`Imagen de ${rubros[currentIndex]!.name}`}
					// width={830}
					// height={400}
					objectFit='contain'
				/>
			</div>
		</>
	)
}

export default RubrosCarrusel
