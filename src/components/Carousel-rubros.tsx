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
    const timelineRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (carruselRef.current) {
			const scrollPosition = currentIndex * carruselRef.current.offsetWidth
			carruselRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth',
			})
		}

        if (timelineRef.current) { 
            const timelineWidth = timelineRef.current.offsetWidth
            console.log(timelineWidth);
            
            const progress = ((currentIndex + 1) / rubros.length) * 100
            timelineRef.current.style.setProperty('--progress', `${progress}%`)
        }
    }, [currentIndex, rubros.length])

	return (
		<>
			<TextTitle className='self-start pb-5 sm:self-end'>
				Rubros
				<Adorno_circulo_item size='lg-sz' />
			</TextTitle>
			<div className='flex w-full flex-wrap'>
                <div className='dev-cnt hidden w-full sm:block'>
                    {/* PROBANDO */}
                    <div
                        ref={timelineRef}
                        className='relative flex dev-cnt  py-2'
                        style={{'--progress': '0%'} as React.CSSProperties}>
                        <div 
                            className='flex justify-around absolute top-1/2 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out'
                            style={{
                                width: 'var(--progress)',
                                transform: 'translateY(-50%)',
                            }}>
                                {rubros.map((_, index) => (
                                    // Pares para arriba, impares para abajo
                                    <button
                                        key={index}
                                        className={`relative h-[10px] w-[10px] rounded-full transition-colors duration-200 ${
                                            index <= currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                        
                                        style={{
                                            transform: `translateY(${index % 2 === 0 ? '-10px' : '10px'})`,
                                            }}
                                        onClick={() => setCurrentIndex(index)}
                                        aria-label={`Ver rubro ${index + 1}`}
                                    />
                                ))}
                        </div>
                    </div>{/* FIN PROBANDO */}


					<div className='flex justify-around py-4'>
                        {rubros.map((_, index) => (
                            // <Adorno_circulo_item key={index} size='lg-sz'/>
                            <button
								key={index}
								className={`h-[10px] w-[10px] rounded-full transition-colors duration-200 ${
									index <= currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                                
                                style={{
                                    transform: `translateY(${index % 2 === 0 ? '-14px' : '6px'})`,
                                    }}
								onClick={() => setCurrentIndex(index)}
								aria-label={`Ver rubro ${index + 1}`}
							/>
						))}
					</div>
				</div>

				<div
					ref={carruselRef}
					className='gap-16 flex w-full flex-col sm:flex-row overflow-x-hidden'
					style={{ scrollSnapType: 'x mandatory' }}>
					{rubros.map((rubro, idx) => (
						<div
							key={idx}
							className='flex w-full flex-wrap sm:flex-shrink-0 items-center justify-between gap-4 sm:gap-0'
							style={{ scrollSnapAlign: 'start' }}>
							<div className='flex flex-grow flex-row gap-3 sm:w-4/12'>
								<Image
									className='dev-cnt max-h-[100px] w-full max-w-[100px] bg-white'
									src={`/imgs/rubros/icon_${rubro.docus}.svg`}
									alt={`Icono de ${rubro.name}`}
									objectFit='cover'
								/>
								<div className='flex flex-col gap-2'>
									<TextSpecial className='text-left text-base font-bold sm:text-xl lg:text-3xl'>
										{rubro.name}
									</TextSpecial>
									<TextSubcontent className='text-left sm:text-sm'>
										<span className='dev-cnt h-[18px] w-[18px]'>➡️</span>See More
									</TextSubcontent>
								</div>
							</div>
							<Image
								className='min-w-[300px] flex-grow sm:w-8/12'
								src={`/imgs/rubros/img_${rubro.docus}.png`}
								alt={`Imagen de ${rubro.name}`}
								objectFit='contain'
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default RubrosCarrusel
