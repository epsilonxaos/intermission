import { Image } from '@components/Carousel-logos'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import Footer from '@modules/Footer'
import Header from '@modules/Header'
import { Hero } from '@modules/Hero'

const About_us = () => {
	return (
		<Main_screen>
			<Header />
			<Hero
				textClassName='flex flex-col gap-4 sm:text-center text-sm sm:text-xl lg:text-xl'
				divClassName='max-w-[1000px] w-9/12'>
				<p className='text-justify'>
					<span className='mt-4 inline-block sm:inline'>
						In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic
						pause.
					</span>

					<span className='mt-4 inline-block sm:inline'>
						{' '}
						We specialize in creating clarity out of chaos, connecting scattered data points to reveal hidden
						opportunities that drive your brand’s growth.
					</span>

					<span className='mt-4 inline-block sm:inline'>
						{' '}
						Our approach is based on the concept of Entropy: we recognize that disorder is a constant in nature and in
						business. We don’t see entropy as an enemy; we see it as a force to be managed.
					</span>
				</p>
				<p className=''>
					<strong>Intermission</strong>, the intelligence division of Made By Partners.
				</p>
				<TextSubcontent className='text-see-more cursor-pointer align-text-bottom sm:text-sm'>
					<Image
						className='mr-2 inline-block h-[18px] w-[18px]'
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Icono para más información sobre Intermission`}
						objectFit='contain'
					/>
					See More
				</TextSubcontent>
			</Hero>
			<Section className={'sm:gap-y-15 gap-y-10'}>
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
						<p className='text-left sm:text-center'>
							<TextTitle className='font-bold'>César Sosa</TextTitle>
							<TextSubcontent className='mb-4'>Director Comercial</TextSubcontent>
							<TextSubcontent>
								In a world where disorder and complexity are the norm, <strong>Intermission</strong> emerges as the
								necessary strategic pause
							</TextSubcontent>
						</p>
					</article>
					<article className='w-full sm:w-3/12'>
						<Image
							className='mb-4 w-full bg-center'
							src={`/team/team1.png`}
							alt={`Persona del equipo de Intermission`}
							objectFit='cover'
						/>
						<p className='text-left sm:text-center'>
							<TextTitle className='font-bold'>César Sosa</TextTitle>
							<TextSubcontent className='mb-4'>Director Comercial</TextSubcontent>
							<TextSubcontent>
								In a world where disorder and complexity are the norm, <strong>Intermission</strong> emerges as the
								necessary strategic pause
							</TextSubcontent>
						</p>
					</article>
					<article className='w-full sm:w-3/12'>
						<Image
							className='mb-4 w-full bg-center'
							src={`/team/team1.png`}
							alt={`Persona del equipo de Intermission`}
							objectFit='cover'
						/>
						<p className='text-left sm:text-center'>
							<TextTitle className='font-bold'>César Sosa</TextTitle>
							<TextSubcontent className='mb-4'>Director Comercial</TextSubcontent>
							<TextSubcontent>
								In a world where disorder and complexity are the norm, <strong>Intermission</strong> emerges as the
								necessary strategic pause
							</TextSubcontent>
						</p>
					</article>
				</section>

				<TextSubcontent className='text-see-more cursor-pointer align-text-bottom sm:text-sm'>
					<Image
						className='mr-2 inline-block h-[18px] w-[18px]'
						src={`/imgs/icon_Flecha_Derecha.svg`}
						alt={`Icono para más información sobre Intermission`}
						objectFit='contain'
					/>
					Start
				</TextSubcontent>
			</Section>
			<Footer />
		</Main_screen>
	)
}

export default About_us
