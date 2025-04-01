import { ButtonForLink } from '@components/Button'
import Container from '@components/Container'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextContent } from '@components/Text'
import { Hero } from '@modules/Hero'
import Team_AboutUs from '@modules/about_us_TEAM'
import useScreenSize from 'src/util/screenSize'
import { Link } from 'wouter'

import { useEffect, useState } from 'react'

const About_us = () => {
	const [teamMembers, setTeamMembers] = useState([{}])
	const { breakpoint } = useScreenSize()
	useEffect(() => {
		setTeamMembers(teamMembersRAW)
	}, [])
	return (
		<Main_screen>
			<Hero divClassName='max-w-[1000px] w-9/12'>
				<TextContent className='flex flex-col gap-4 text-left text-sm sm:items-center sm:text-center sm:text-xl'>
					<p>
						<span className='inline-block sm:inline'>
							In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic
							pause.
						</span>
						<span className='inline-block sm:inline'>
							{' '}
							We specialize in creating clarity out of chaos, connecting scattered data points to reveal hidden
							opportunities that drive your brand’s growth.
						</span>
						<span className='inline-block sm:inline'>
							{' '}
							Our approach is based on the concept of Entropy: we recognize that disorder is a constant in nature and in
							business. We don’t see entropy as an enemy; we see it as a force to be managed.
						</span>
					</p>
					<p className=''>
						<strong>Intermission</strong>, the intelligence division of Made By Partners.
					</p>
					<Link to='/contact_us'>
						<ButtonForLink
							className='mt-8 sm:mt-14'
							colorText='text-white'
							text='See More'
							linkTo='/' //Aquí o desde onclick
							infoFor={'Intermission'}
						/>
					</Link>
				</TextContent>
			</Hero>
			<Container className='relative z-[1] !p-0'>
				<div className='absolute -left-[250px] top-0 z-[-1] size-[550px] rounded-full bg-[#003484]/40 blur-3xl' />
			</Container>
			<Section className={'sm:gap-y-15 relative z-[2] gap-y-10 px-0 sm:px-0'}>
				<Team_AboutUs
					screenSize={breakpoint}
					team={teamMembers}
				/>
			</Section>

			<Container className='relative z-[1] !p-0'>
				<div className='absolute -bottom-[250px] -right-[250px] z-[-1] size-[550px] rounded-full bg-[#003484]/40 blur-3xl' />
			</Container>
		</Main_screen>
	)
}

const teamMembersRAW = [
	{
		name: 'César Sosa 1',
		role: 'Director Comercial',
		imgSrc: 'team/team1.png',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: 'César Sosa 2',
		role: 'Director Comercial',
		imgSrc: 'team/team2.png',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause. In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: 'César Sosa',
		role: 'Director Comercial',
		imgSrc: 'team/team3.png',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: 'César Sosa',
		role: 'Director Comercial',
		imgSrc: 'team/team1.png',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: 'César Sosa',
		role: 'Director Comercial',
		imgSrc: 'team/team3.png',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
	{
		name: 'César Sosa',
		role: 'Director Comercial',
		imgSrc: 'team/team3.png',
		description:
			'In a world where disorder and complexity are the norm, Intermission emerges as the necessary strategic pause.',
	},
]
export default About_us
