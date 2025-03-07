import { Image } from '@components/Image'
import { TextComponent, TextLinkTo, TextSpecial, TextSubcontent } from '@components/Text'
import { Link } from 'wouter'

import { useEffect, useState } from 'react'

import Bg_Image_Background from '../../public/imgs/fondo_negro.png'

const getScreenSize = () => {
	const width = window.innerWidth
	if (width < 640) return 'sm'
	if (width < 768) return 'md'
	if (width < 1024) return 'lg'
	if (width < 1280) return 'xl'
	return '2xl'
}

const Footer = () => {
	const [sizeScreen, setSizeScreen] = useState(getScreenSize())
	useEffect(() => {
		const handleResize = () => {
			setSizeScreen(getScreenSize())
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<footer
			style={{ backgroundImage: `url(${Bg_Image_Background})` }}
			className='-z-50 grid w-full gap-y-4 pt-20 pb-8 text-main'>
			<div className='w-full overflow-hidden bg-cover sm:hidden'>
				<Image
					src='/footer/div_numero.svg'
					alt='Divisor'
					className='w-full'
					objectFit='contain'
				/>
			</div>

			<main className='mx-auto flex w-full max-w-[1430px] flex-col gap-y-8 px-[30px]'>
				<section className='grid gap-y-3 sm:gap-y-6'>
					<Image
						className='h-12 max-w-[325px] sm:h-14 md:h-16'
						src='/footer/intermission_logo.svg'
						alt='Logo de Intermission'
						objectFit='contain'
					/>
					<TextSubcontent>hello@intermission.partners</TextSubcontent>
				</section>
				<section className='flex flex-wrap justify-between gap-y-4 sm:flex-row sm:gap-y-6'>
					<article className='flex w-full max-w-[450px] items-end justify-between'>
						<TextList>
							<TextLinkTo
								className='dev-cnt'
								to=''>
								Twitter
							</TextLinkTo>
							<TextLinkTo to='https://www.instagram.com/intermission.partners'>Instagram</TextLinkTo>
							<TextLinkTo to='https://www.facebook.com/Intermission.Partners'>Facebook</TextLinkTo>
							<TextLinkTo to='https://www.linkedin.com/company/intermissionpartners/'>LinkedIn</TextLinkTo>
						</TextList>
						<TextList>
							<TextComponent>Código</TextComponent>
						</TextList>
						<TextList>
							<TextComponent>Avenida</TextComponent>
							<TextComponent>Número</TextComponent>
							<TextComponent>Colonia</TextComponent>
							<TextComponent>Postal</TextComponent>
						</TextList>
						<TextList>
							<TextComponent>Líbano x 3 - A</TextComponent>
							<TextComponent>101 - B</TextComponent>
							<TextComponent>México Nte</TextComponent>
							<TextComponent>97128</TextComponent>
						</TextList>
					</article>
					<div className='flex flex-grow flex-col justify-between sm:flex-row md:justify-around'>
						<Image
							src='/footer/numero.svg'
							alt='Número de teléfono de Intermission'
							className='w-full max-w-[340px]'
							objectFit='contain'
						/>
						<article className='relative flex items-end justify-between sm:w-[190px] xl:w-[250px] sm:justify-end'>
							<div className='grid gap-8'>
								<TextSpecial className='sm:text-[52px]'>Starts</TextSpecial>
								<div className='mb-8 flex flex-col gap-2 sm:hidden'>
									<FooterTermsAndConditions />
								</div>
							</div>
							<Image
								src='/footer/animacion_footer.gif'
								alt='Animación de Intermission'
								className='w-[150px] md:w-full sm:absolute sm:top-[-280px] sm:flex lg:top-[-200px]'
								objectFit='cover'
							/>
						</article>
					</div>
				</section>
			</main>

			<div className='hidden w-full flex-col sm:flex'>
				<Image
					src='/footer/div_numero.svg'
					alt='Divisor'
					className='mt-8 h-[50px] w-full'
					objectFit='contain'
				/>
				<div className='flex-col px-[50px] sm:flex sm:flex-row sm:items-center sm:justify-between sm:px-[60px]'>
					<FooterTermsAndConditions />
				</div>
			</div>
		</footer>
	)
}

const FooterTermsAndConditions = () => {
	return (
		<>
			<TextSubcontent className='text-[10px]'>
				<TextLinkTo to='terminos-condiciones'>Terms and Conditions</TextLinkTo>
			</TextSubcontent>

			<TextLinkTo to='https://www.madeby.partners/'>
				<Image
					src='/footer/madebypartners.svg'
					alt='Logo MadeByPartners'
					className='w-[100px] sm:w-[140px]'
					objectFit='contain'
				/>
			</TextLinkTo>

			<TextSubcontent className='text-[10px]'>
				<TextLinkTo to='politicas-privacidad'>Private politics</TextLinkTo>
			</TextSubcontent>
		</>
	)
}

const TextList = ({ children }) => (
	<TextSubcontent className='z-10 flex flex-col gap-y-1 text-[10px]'>{children}</TextSubcontent>
)

export default Footer
