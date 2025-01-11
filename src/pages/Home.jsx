import LogoCarousel from '@components/Carousel-logos'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent, TextTitle } from '@components/Text'
import Test from '@components/test'
import Footer from '@modules/Footer'
import Header, { Adorno_circulo_item } from '@modules/Header'
import { Hero } from '@modules/Hero'

const Home = () => {
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
					<TextTitle className='self-start sm:self-end'>
						Rubros
						<Adorno_circulo_item
							size='lg-sz'
							item={{}}
						/>
					</TextTitle>
					<p>
						RUBROS. Celular solo 2 secciones: info e img (info: icono, nombre, 'See More') <br />
						PC: Info, IMG y Segiuimiento de Carrusel (Este tendrá comportamiento extraño)
					</p>
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
					<LogoCarousel />
					<LogoCarousel />
				</>
			</Section>

			{/* <Section>
				<Test />
			</Section> */}
			<Footer />
		</Main_screen>
	)
}

export default Home
