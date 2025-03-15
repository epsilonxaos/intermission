import LogoCarousel from '@components/Carousel-logos'
import RubrosCarrusel from '@components/Carousel-rubros'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent, TextSpecial, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import Footer from '@modules/Footer'
import Header from '@modules/Header_old'
import { Hero } from '@modules/Hero'

const Home = () => {
	const rubros = [
		{
			name: 'Desarrollos Inmobiliarios',
			docus: 'Desarrollos_Inmobiliarios',
			linkTo: '/rubros/desarrollo_inmobiliario',
		},
		{ name: 'Hoteles Boutique', docus: 'Hoteles_Boutique', linkTo: '/rubros/hoteles_boutique' },
		{
			name: 'Servicios y Productos Tecnológicos',
			docus: 'Servicios_y_Productos_Tecnologicos',
			linkTo: '/rubros/servicios_productos_tecnologicos',
		},
		{ name: 'Tiendas Online', docus: 'Tiendas_Online', linkTo: '/rubros/tiendas_online' },
	]
	return (
		<Main_screen>
			<Hero>A Digital Consultancey Company</Hero>
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

			<Section className={'sm:gap-y-15 gap-y-10'}>
				<RubrosCarrusel rubros={rubros} />
			</Section>

			<Section className={'sm:gap-y-15 gap-y-10'}>
				<TextTitle className='self-start sm:self-end'>
					Clientes
					<Adorno_circulo_item size='lg-sz' />
				</TextTitle>
				{/* Hacer petición a API, obtener imagenes y particionar los
				logos entre el número de carruseles */}
				<LogoCarousel
					logos={logos}
					direction='left'
				/>
				<LogoCarousel
					logos={logos}
					direction='right'
				/>
			</Section>
			{/* <Footer /> */}
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
