import LogoCarousel from '@components/Carousel-logos'
import Test from '@components/test'
import Footer from '@modules/Footer'
import Header, { Adorno_circulo_item } from '@modules/Header'

const Home = () => {
	return (
		<Main_screen>
			{/* Debería ir por defecto el HEADER y FOOTER? */}
			<Header />
			<Hero />
			<Section styleExtra={'gap-y-20'}>
				<>
					<p className='max-w-80 self-start text-lg'>
						Redefiniendo tu estrategia digital a través de la ciencia de datos.
						<Adorno_circulo_item
							size='md-sz'
							item={{ estrella: 1 }}
						/>
					</p>
					<p className='max-w-80 self-end text-lg'>
						<Adorno_circulo_item
							size='md-sz'
							item={{ estrella: 2 }}
						/>{' '}
						En el mundo donde el desorden y la complejidad son la norma, Intermission emerge como la pausa estratégica
						necesaria.
					</p>
					<p className='max-w-80 self-center text-lg'>
						Nos Especializamos en crear claridad
						<Adorno_circulo_item
							size='md-sz'
							item={{ estrella: 3 }}
						/>{' '}
						<br />a partir del caos, conectando los puntos entre datos dispersos para revelar las oportunidades ocultad
						que impulsan el crecimiento de tu marca.
					</p>
				</>
			</Section>

			<Section>
				<p>
					RUBROS. Celular solo 2 secciones: info e img (info: icono, nombre, 'See More') <br />
					PC: Info, IMG y Segiuimiento de Carrusel (Este tendrá comportamiento extraño)
				</p>
			</Section>

			<Section styleExtra={'gap-y-10 h-[500px]'}>
				<>
					<p className='text-main self-start sm:self-end sm:text-2xl lg:text-3xl'>CLIENTES</p>
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

//Componente que engloba todo el contenido de la página
export const Main_screen = ({ children }) => {
	return <div className='bg-main-background flex-col bg-repeat'>{children}</div>
}

// Componentes
const Hero = () => {
	return (
		// <div className='min-h-hero bg-hero-content flex flex-col items-center justify-center bg-contain bg-top bg-no-repeat'>
		// <div className='min-h-hero bg-hero-content flex flex-col items-center justify-center gap-y-5 bg-cover bg-center'>
		// OJO ESTE PODRÏA VENIR DESDE PROPS, PARA MODULARIDAD
		<div
			className='animate-fading-in min-h-hero bg-hero-content flex flex-col items-center justify-center gap-y-5 bg-cover bg-center'
			style={{
				// CUIDADO, SE MEZCLAN LOS ESTILOS
				// '--transition-duration': '5000ms',
				'--translateY-initial': '30px',
			}}>
			{/* SI QUIERO MANEJARLO SIN EL GAP Y QUIERO UN COMPORTAMIENTO DIFERENTE ENTRE LOS ELEMENTOS ADENTRO */}
			{/* <div className='flex h-[15vh] w-full flex-col items-center justify-between'> */}
			<div className='bg-hero-animation h-24 w-full bg-cover bg-center sm:w-9/12 lg:w-7/12'></div>
			<h1 className='text-main sm:text-2xl lg:text-3xl'>A Digital Consultancey Company</h1>
		</div>
		// </div>
	)
}

export const Section = ({ children, styleExtra }) => {
	return (
		// CONTENEDOR
		<div className='mx-auto flex max-w-section flex-col items-center justify-center border-2 border-red-700 text-center'>
			{/* CONTENIDO */}
			<div
				className={`text-main max-w-section-content flex w-full flex-col items-center justify-center border-2 border-blue-700 p-4 sm:p-8 ${styleExtra}`}>
				{children}
			</div>
		</div>
	)
}

export default Home
