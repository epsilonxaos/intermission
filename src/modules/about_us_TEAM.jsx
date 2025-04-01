import { ButtonForLink } from '@components/Button';
import { Image } from '@components/Image';
import { TextSubcontent, TextTitle } from '@components/Text';
import Adorno_circulo_item from '@components/circle_decoration'

import { useEffect, useRef, useState } from 'react'

const Team_AboutUs = ({ team, screenSize }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const carruselRef = useRef(null)
	// OJO: Está hecho para que haya mínimo 3  personas en el equipo. Sino se podría usar min y max.
	const handlePrev = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? team.length - 3 : prevIndex - 1))
	}
	const handleNext = () => {
		setCurrentIndex(prevIndex => (prevIndex === team.length - 3 ? 0 : prevIndex + 1))
	}

	useEffect(() => {
		if (screenSize === 'sm') {
			setCurrentIndex(0)
		}
	}, [screenSize])

	return (
		<>
			<TextTitle className='self-start'>
				TEAM
				<Adorno_circulo_item size='lg-sz' />
			</TextTitle>
			<section className='flex w-full flex-col justify-around space-y-10 overflow-x-hidden md:flex-row md:space-y-0'>
				<div
					onClick={handlePrev}
					className='hidden self-center md:block'>
					<Image
						className='w-[25px] rotate-180'
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Flecha izquierda para carrusel de equipo de Intermission`}
						objectFit='contain'
					/>
				</div>

				<div
					ref={carruselRef}
					className='w-full overflow-x-hidden'>
					<div
						className='flex flex-col gap-y-10 transition-transform duration-700 ease-in-out md:flex-row'
						style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
						{team.map((member, idx) => (
							<article
								key={idx}
								className='flex-shrink-0 px-8 py-4 md:w-1/3'>
								<Image
									className='mb-4 h-full max-h-[600px] min-h-[300px] w-full bg-center md:max-h-[200px] lg:max-h-[300px]'
									src={member.imgSrc}
									alt={`Persona del equipo de Intermission`}
									objectFit='cover'
								/>
								<div className='text-left md:text-center'>
									<TextTitle className='font-bold'>{member.name}</TextTitle>
									<TextSubcontent className='mb-4 md:mb-7'>{member.role}</TextSubcontent>
									<TextSubcontent>{member.description}</TextSubcontent>
								</div>
							</article>
						))}
					</div>
				</div>

				<div
					onClick={handleNext}
					className='hidden self-center md:block'>
					<Image
						className='w-[25px]'
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Flecha Derecha para carrusel de equipo de Intermission`}
						objectFit='contain'
					/>
				</div>
			</section>
			<ButtonForLink
				text='Start'
				colorText='text-white'
				linkTo='/' //Aquí o desde onclick
				infoFor={'Intermission'}
			/>
		</>
	)
}

export default Team_AboutUs