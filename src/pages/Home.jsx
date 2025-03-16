import informationDesk from '@assets/img/home/information_desk.svg'
import informationMobil from '@assets/img/home/information_mobil.svg'
import LogoCarousel from '@components/Carousel-logos'
import RubrosCarrusel from '@components/Carousel-rubros'
import Container from '@components/Container'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent, TextSpecial, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import Footer from '@modules/FooterOld'
import { Hero } from '@modules/Hero'

import { HiOutlineArrowRightCircle } from 'react-icons/hi2'
import { PiCaretCircleRight } from 'react-icons/pi'

const Home = () => {
	const rubros = [
		{
			name: 'Desarrollos Inmobiliarios',
			docus: '1',
			linkTo: '/rubros/desarrollo_inmobiliario',
		},
		{ name: 'Hoteles Boutique', docus: '4', linkTo: '/rubros/hoteles_boutique' },
		{
			name: 'Servicios y Productos Tecnológicos',
			docus: '2',
			linkTo: '/rubros/servicios_productos_tecnologicos',
		},
		{ name: 'Tiendas Online', docus: '3', linkTo: '/rubros/tiendas_online' },
	]
	return (
		<Main_screen>
			<Hero>
				{/* <div className='h-24 w-full bg-hero-animation-home bg sm:w-9/12 lg:w-7/12' /> */}
				<TextSpecial>A Digital Consultancy Company.</TextSpecial>
			</Hero>

			<Container>
				<img
					src={informationDesk}
					alt='Information'
					className='hidden md:block'
				/>
				<img
					src={informationMobil}
					alt='Information'
					className='md:hidden'
				/>

				<button className='ml-auto mr-0 flex items-center gap-1 text-[#5C8BD5]'>
					<HiOutlineArrowRightCircle size={18} />
					See more
				</button>
			</Container>

			<Container>
				<RubrosCarrusel rubros={rubros} />
			</Container>

			<Section className={'sm:gap-y-15 gap-y-10'}>
				<TextTitle className='self-start sm:self-end'>
					Clientes
					<Adorno_circulo_item size='lg-sz' />
				</TextTitle>

				<LogoCarousel
					logos={logos}
					direction='left'
				/>
				<LogoCarousel
					logos={logos}
					direction='right'
				/>
			</Section>
		</Main_screen>
	)
}

const logos = [
	'/imgs/clientes/1.svg',
	'/imgs/clientes/2.svg',
	'/imgs/clientes/3.svg',
	'/imgs/clientes/4.svg',
	'/imgs/clientes/1.svg',
	'/imgs/clientes/2.svg',
	'/imgs/clientes/3.svg',
	'/imgs/clientes/4.svg',
]
export default Home
