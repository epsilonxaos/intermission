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
		if (screenSize === 'xs') {
			setCurrentIndex(0)
		}
	}, [screenSize])

	return (
		<>
			<TextTitle className='self-start'>
				TEAM
				<Adorno_circulo_item size='lg-sz' />
			</TextTitle>
			<section className='flex w-full flex-col justify-around space-y-10 overflow-x-hidden sm:flex-row sm:space-y-0'>
				<div
					onClick={handlePrev}
					className='mr-4 hidden w-[50px] self-center sm:block'>
					<Image
						className='hidden rotate-180 sm:block'
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Flecha izquierda para carrusel de equipo de Intermission`}
						objectFit='contain'
					/>
				</div>

				<div
					ref={carruselRef}
					className='w-full overflow-x-hidden'>
					<div
						className='flex flex-col gap-y-16 transition-transform duration-700 ease-in-out sm:flex-row'
						style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
						{team.map((member, idx) => (
							<article
								key={idx}
								className='flex-shrink-0 px-8 py-4 sm:w-1/3'>
								<Image
									className='mb-4 w-full bg-center'
									src={`/team/team1.png`}
									alt={`Persona del equipo de Intermission`}
									objectFit='cover'
								/>
								<div className='text-left sm:text-center'>
									<TextTitle className='font-bold'>{member.name}</TextTitle>
									<TextSubcontent className='mb-4'>{member.role}</TextSubcontent>
									<TextSubcontent>{member.description}</TextSubcontent>
								</div>
							</article>
						))}
					</div>
				</div>

				<div
					onClick={handleNext}
					className='ml-4 hidden w-[50px] self-center sm:block'>
					<Image
						className='hidden sm:block'
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Flecha Derecha para carrusel de equipo de Intermission`}
						objectFit='contain'
					/>
				</div>
			</section>
			<ButtonForLink
				text='Start'
				linkTo='/' //Aquí o desde onclick
				infoFor={'Intermission'}
			/>
		</>
	)
}

export default Team_AboutUs