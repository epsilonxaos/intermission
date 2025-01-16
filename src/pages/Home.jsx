import LogoCarousel, { Image } from '@components/Carousel-logos'
import RubrosCarrusel from '@components/Carousel-rubros'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent, TextSpecial, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import Test from '@components/test'
import Footer from '@modules/Footer'
import Header from '@modules/Header'
import { Hero } from '@modules/Hero'

const Home = () => {
	const rubros = [
		{ name: 'Desarrollos Inmobiliarios', docus: 'Desarrollos_Inmobiliarios' },
		{ name: 'Hoteles Boutique', docus: 'Hoteles_Boutique' },
		{ name: 'Servicios y Productos Tecnológicos', docus: 'Servicios_y_Productos_Tecnologicos' },
		{ name: 'Tiendas Online', docus: 'Tiendas_Online' },
	]
	return (
		<Main_screen>
			{/* Debería ir por defecto el HEADER y FOOTER? */}
			<Header />
			<Hero />
			<Section className={'gap-y-20'}>
				<>
					<TextContent className='max-w-80 self-start'>
						Redefiniendo tu estrategia digital a través de la ciencia de datos.
						<Adorno_circulo_item
							size='md-sz'
							item={{ estrella: 1 }}
						/>
					</TextContent>
					<TextContent className='max-w-80 self-end'>
						<Adorno_circulo_item
							size='md-sz'
							margin='mx-3'
							item={{ estrella: 2 }}
						/>
						En el mundo donde el desorden y la complejidad son la norma, Intermission emerge como la pausa estratégica
						necesaria.
					</TextContent>
					<TextContent className='max-w-80 self-center'>
						Nos Especializamos en crear claridad
						<Adorno_circulo_item
							size='md-sz'
							item={{ estrella: 3 }}
						/>{' '}
						<br />a partir del caos, conectando los puntos entre datos dispersos para revelar las oportunidades ocultad
						que impulsan el crecimiento de tu marca.
					</TextContent>
				</>
			</Section>

			<Section>
				<>
					<TextTitle className='self-start pb-5 sm:self-end'>
						Rubros
						<Adorno_circulo_item
							size='lg-sz'
							item={{}}
						/>
					</TextTitle>
					<div className='flex w-full flex-wrap items-center justify-between gap-0'>
						<div className='dev-cnt hidden w-full sm:block'>TIMELINE</div>
						<div className='flex flex-grow flex-row gap-3 sm:w-4/12'>
							{/* <svg
								className='fil-wwhite dev-cnt max-h-[100px] w-full max-w-[100px]'
								style={{
									backgroundImage: "url('/imgs/rubros/icon_Desarrollos_Inmobiliarios.svg')",
								}}>
								Contenido
							</svg> */}
							<Image
								className='dev-cnt mt-2 max-h-[100px] w-full max-w-[100px] bg-white'
								src={`/imgs/rubros/icon_${rubros[2].docus}.svg`}
								alt={`Cliente `}
								objectFit='contain'
							/>
							<div className='flex flex-col gap-2'>
								<TextSpecial className='text-left text-base font-bold sm:text-xl lg:text-3xl'>{`${rubros[2].name}`}</TextSpecial>
								<TextSubcontent className='text-left sm:text-sm'>
									<span className='dev-cnt h-[18px] w-[18px]'>➡️</span>See More
								</TextSubcontent>
							</div>
						</div>
						<Image
							className='min-w-[300px] flex-grow sm:w-8/12'
							src={`/imgs/rubros/img_${rubros[2].docus}.png`}
							alt={`Cliente `}
							objectFit='contain'
						/>
					</div>
				</>
			</Section>

			<Section className={'sm:gap-y-15 gap-y-10'}>
				<>
					<TextTitle className='self-start sm:self-end'>
						Clientes
						<Adorno_circulo_item
							size='lg-sz'
							item={{}}
						/>
					</TextTitle>
					{/* Hacer petición a API, obtener imagenes y particionar los
					logos entre el número de carruseles */}
					<LogoCarousel direction='left' />
					<LogoCarousel direction='right' />
				</>
			</Section>

			<Section>
				<RubrosCarrusel rubros={rubros} />
				{/* <Test images={logos} /> */}
			</Section>
			<Footer />
		</Main_screen>
	)
}

const logos = [
	'/clientes/logo1.png',
	'/clientes/logo2.png',
	'/clientes/logo3.png',
	'/clientes/logo4.png',
	'/clientes/logo5.png',
	'/clientes/logo6.png',
]
export default Home
