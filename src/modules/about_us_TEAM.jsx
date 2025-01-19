import { ButtonForLink } from '@components/Button'
import { Image } from '@components/Image'
import { TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'

const Team_AboutUs = () => {
	return (
		<>
			<TextTitle className='self-start sm:self-end'>
				TEAM
				<Adorno_circulo_item size='lg-sz' />
			</TextTitle>
			<section className='dev-cnt flex w-full flex-col justify-around space-y-10 sm:flex-row sm:space-y-0'>
				{/* AQUI CARRUSEL */}
				<article className='w-full sm:w-3/12'>
					<Image
						className='mb-4 w-full bg-center'
						src={`/team/team1.png`}
						alt={`Persona del equipo de Intermission`}
						objectFit='cover'
					/>
					<div className='text-left sm:text-center'>
						<TextTitle className='font-bold'>César Sosa</TextTitle>
						<TextSubcontent className='mb-4'>Director Comercial</TextSubcontent>
						<TextSubcontent>
							In a world where disorder and complexity are the norm, <strong>Intermission</strong> emerges as the
							necessary strategic pause
						</TextSubcontent>
					</div>
				</article>
				<article className='w-full sm:w-3/12'>
					<Image
						className='mb-4 w-full bg-center'
						src={`/team/team1.png`}
						alt={`Persona del equipo de Intermission`}
						objectFit='cover'
					/>
					<div className='text-left sm:text-center'>
						<TextTitle className='font-bold'>César Sosa</TextTitle>
						<TextSubcontent className='mb-4'>Director Comercial</TextSubcontent>
						<TextSubcontent>
							In a world where disorder and complexity are the norm, <strong>Intermission</strong> emerges as the
							necessary strategic pause
						</TextSubcontent>
					</div>
				</article>
				<article className='w-full sm:w-3/12'>
					<Image
						className='mb-4 w-full bg-center'
						src={`/team/team1.png`}
						alt={`Persona del equipo de Intermission`}
						objectFit='cover'
					/>
					<div className='text-left sm:text-center'>
						<TextTitle className='font-bold'>César Sosa</TextTitle>
						<TextSubcontent className='mb-4'>Director Comercial</TextSubcontent>
						<TextSubcontent>
							In a world where disorder and complexity are the norm, <strong>Intermission</strong> emerges as the
							necessary strategic pause
						</TextSubcontent>
					</div>
				</article>
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
