import { ButtonForLink } from '@components/Button'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import Footer from '@modules/Footer'
import Header from '@modules/Header'
import { Hero } from '@modules/Hero'
import Team_AboutUs from '@modules/about_us_TEAM'

import { useEffect, useState } from 'react'
import useScreenSize from 'src/util/screenSize'

const About_us = () => {
	const [teamMembers, setTeamMembers] = useState([{}])
	const { breakpoint} = useScreenSize()
	useEffect(() => {
		setTeamMembers(teamMembersRAW)
	}, [])
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
				<Team_AboutUs screenSize={breakpoint} team={teamMembers} />
			</Section>
			{/* <Footer /> */}
		</Main_screen>
	)
}

const teamMembersRAW = [
	{
		name: '1 César Sosa',
		role: 'Director Comercial',
		description:
			'In a world where disorder and complexity are the norm, <strong>Intermission</strong> emerges as the necessary strategic pause.',
	},
	{
		name: '2 César Sosa',
		role: 'Director Comercial',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: '3 César Sosa',
		role: 'Director Comercial',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: '4 César Sosa',
		role: 'Director Comercial',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: '5 César Sosa',
		role: 'Director Comercial',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: '6 César Sosa',
		role: 'Director Comercial',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
]
export default About_us
