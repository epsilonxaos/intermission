import FooterAminate from '@assets/img/footer-animation.png'
import Logo from '@assets/img/intermission-logo.svg'
import LineM from '@assets/img/line-footer-mobil.svg'
import Line from '@assets/img/line-footer.svg'
import MBP from '@assets/img/madebypartners.svg'
import Numero from '@assets/img/numero.svg'
import DotsFooter from '@components/Animations/DotsFooter'
import Container from '@components/Container'
import { TextSpecial } from '@components/Text'
import { twMerge } from 'tailwind-merge'

import { useMediaQuery } from 'react-responsive'

const Footer = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

	return (
		<footer className='text-white'>
			{isMobile && (
				<img
					src={LineM}
					alt='Line footer'
					className='w-full'
				/>
			)}

			<Container className='relative z-10 px-[50px]'>
				<img
					className='mb-11 w-full max-w-[250px] invert md:max-w-[326px]'
					src={Logo}
					alt='Intermission'
				/>
				{!isMobile && (
					<img
						src={FooterAminate}
						alt='Animation'
						className='absolute right-0 top-0 size-[250px] object-contain'
					/>
				)}
				<a
					className='mb-11 inline-block text-xs'
					href='mailto:hello@intermission.partners'>
					hello@intermission.partners
				</a>

				{/* <img
					src={FooterAminate}
					alt='Animation'
				/> */}

				{isMobile ? <MobilGrid /> : <DeskGrid />}
			</Container>

			{!isMobile && (
				<>
					<img
						src={Line}
						alt='Line footer'
						className='w-full'
					/>

					<Container className='!py-7 px-[50px]'>
						<TermsAndConditions className={'flex-row items-center justify-between'} />
					</Container>
				</>
			)}
		</footer>
	)
}

const MobilGrid = () => {
	return (
		<>
			<div className='mb-11 flex items-end justify-between text-[10px]'>
				<SocialMedia />
				<Address />
				<div className='hidden sm:block'>
					<NumeroBullets />
				</div>
			</div>

			<div className='mb-11 sm:hidden'>
				<NumeroBullets />
			</div>

			<TextSpecial className='md:text-[52px]'>Start</TextSpecial>

			<div className='relative grid grid-cols-2'>
				<TermsAndConditions />

				<div className='relative'>
					<img
						src={FooterAminate}
						alt='Animation'
						className='absolute -top-[60px] right-0 h-auto w-full max-w-[150px] object-contain'
					/>
				</div>
			</div>
		</>
	)
}

const DeskGrid = () => {
	return (
		<div className='flex items-end justify-between text-[10px] lg:text-sm'>
			<SocialMedia />
			<Address />
			<NumeroBullets />
			<TextSpecial className='sm:text-[52px]'>Start</TextSpecial>
		</div>
	)
}

const SocialMedia = () => {
	return (
		<ul>
			<li>
				<a href='https://twitter.com/IntermissionP'>Twitter</a>
			</li>
			<li>
				<a href='https://www.facebook.com/intermissionpartners'>Facebook</a>
			</li>
			<li>
				<a href='https://www.instagram.com/intermission.partners/'>Instagram</a>
			</li>
			<li>
				<a href='https://www.linkedin.com/company/intermission-partners/'>LinkedIn</a>
			</li>
		</ul>
	)
}

const Address = () => {
	return (
		<div className='grid grid-cols-3 items-end'>
			<div>
				<p>Codigo</p>
			</div>
			<div>
				<p>Avenida</p>
				<p>Numero</p>
				<p>Colonia</p>
				<p>Postal</p>
			</div>
			<div>
				<p>Líbano x 3 - A</p>
				<p>101 - B</p>
				<p>Mexico Nte</p>
				<p>97128</p>
			</div>
		</div>
	)
}

const NumeroBullets = () => (
	<a href='tel:+529991815368'>
		<img
			className='w-full max-w-[195px]'
			src={Numero}
			alt='Numero'
		/>
	</a>
)

const TermsAndConditions = ({ className }) => {
	return (
		<div className={twMerge('flex flex-col gap-1 text-[10px] md:text-xs', className)}>
			<p className='order-1'>Terms and conditions</p>
			<p className='order-2 md:order-3'>Privacy policy</p>
			<img
				src={MBP}
				className='order-3 mt-2 invert md:order-2'
				width={100}
				alt='Made By Partners'
			/>
		</div>
	)
}

export default Footer
