import Container from '@components/Container'
import { Image } from '@components/Image'
import Main_screen from '@components/Main_screen'
import { TextSubcontent } from '@components/Text'
import PartnersCarousel from '@modules/partners_CARR'
import useScreenSize from 'src/util/screenSize'
import { twMerge } from 'tailwind-merge'

const PartnersItems4Carousel = {
	Telepath: [
		'partners/Telepath/3.png',
		'partners/Telepath/1.png',
		'partners/Telepath/2.png',
		'partners/Matine/1.png',
		'partners/Matine/2.png',
		'partners/Telepath/3.png',
		'partners/Telepath/1.png',
	],
	Matine: [
		'partners/Matine/3.png',
		'partners/Matine/1.png',
		'partners/Matine/2.png',
		'partners/Telepath/1.png',
		'partners/Telepath/2.png',
		'partners/Matine/3.png',
		'partners/Matine/1.png',
	],
}
const Partners = () => {
	const { breakpoint } = useScreenSize()

	return (
		<Main_screen>
			<Container className='overflow-hidden'>
				{/* PARTNER INTERMISSION TELEPATH */}
				<div className='mt-16 sm:mt-52'>
					<Image
						className={'h-[48px] w-[261px] place-self-center invert sm:place-self-end'}
						src={'/partners/Telepath/logotipo_Telepath.svg'}
						alt={'Partners'}
					/>

					{/* Valores de separación tomados del diseño en FIGMA */}
					<section className='mb-16 mt-16 sm:mb-14 sm:mt-20'>
						<PartnersCarousel
							screenSize={breakpoint}
							imgs={PartnersItems4Carousel.Telepath}
						/>
					</section>

					<section className='justify-between sm:flex'>
						<Image
							className='hidden h-[171px] w-[171px] invert sm:block'
							src='partners/Telepath/isotipo_Telepath.svg'
						/>
						<TextSubcontent className='grid max-w-[500px] gap-y-5'>
							<p className='sm:text-right'>
								<strong>Telepath</strong> is an act of creation, construction and cultivation. Focused on the essence of
								things, collaborations and a sincere vision of the world. It is a thinking body that works and creates.
								Its purpose is the transmission of feelings, ideas and perceptions to the minds of others. “What’s on
								your mind?”
							</p>
							<p className='sm:text-right'>
								Telepath is the creative division of <strong>Made By Partners</strong>.
							</p>
							<span className='sm:text-right'>
								<a href='https://www.instagram.com/telepath.studio/?hl=es'>
									<u>@telepath.studio</u>
									<Image
										className='inline-block h-4 w-6 invert'
										src='partners/icon_link.svg'
									/>
								</a>
							</span>
						</TextSubcontent>
					</section>
				</div>

				{/* PARTNER MATINÉ */}
				<div className='mt-40 sm:mb-64 sm:mt-32'>
					<Image
						className={'h-[139px] w-[215px] place-self-center invert sm:h-[196px] sm:w-[305px] sm:place-self-start'}
						src={'/partners/Matine/logotipo_Matine.svg'}
						alt={'Partners'}
					/>

					<section className='mb-20 mt-16 sm:mb-16 sm:mt-14'>
						<PartnersCarousel
							screenSize={breakpoint}
							imgs={PartnersItems4Carousel.Matine}
						/>
					</section>

					<section className='flex-row-reverse justify-between sm:flex'>
						<Image
							className='hidden h-[127px] w-[127px] invert sm:block'
							src='partners/Matine/isotipo_Matine.svg'
						/>
						<TextSubcontent className='grid max-w-[500px] gap-y-5'>
							<p>
								<strong>MATINÉ</strong> is the production house of Made By Partners. The name makes reference to the
								movie or theater showings during daytime. <br />
								This concept gave the brand its visual direction, generating organic and juvenile elements inspired by
								graphic styles from the 90's. A childhood memory and an inspiration for the crew.
							</p>
							<span className=''>
								<a href='https://www.instagram.com/matinevisual/?hl=es'>
									<u>@telepath.studio</u>{' '}
									<Image
										className='inline-block h-4 w-6 invert'
										src='partners/icon_link.svg'
									/>
								</a>
							</span>
						</TextSubcontent>
					</section>
					<Image
						src='partners/Matine/matine.png'
						className='absolute right-0 hidden h-[400px] opacity-20 sm:block'
						objectFit='cover'
					/>
				</div>
			</Container>
		</Main_screen>
	)
}

export default Partners
