import { ButtonForLink } from '@components/Button'
import { Image } from '@components/Carousel-logos'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import Footer from '@modules/Footer'
import Header from '@modules/Header'
import { Hero } from '@modules/Hero'
import Team_AboutUs from '@modules/about_us_TEAM'

const About_us = () => {
	return (
		<Main_screen>
			<Header />
			<Hero
				textClassName='flex flex-col gap-4 sm:items-center text-sm sm:text-xl lg:text-xl'
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
				<ButtonForLink
					text='See More'
					linkTo='/' //Aquí o desde onclick
					infoFor={'Intermission'}
				/>
			</Hero>
			<Section className={'sm:gap-y-15 gap-y-10'}>
				<Team_AboutUs />
			</Section>
			<Footer />
		</Main_screen>
	)
}

export default About_us
