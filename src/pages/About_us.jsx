import { ButtonForLink } from '@components/Button';
import Main_screen from '@components/Main_screen';
import Section from '@components/Section';
import { TextContent } from '@components/Text';
import Adorno_circulo_item from '@components/circle_decoration';
import Footer from '@modules/FooterOld';
import { Hero } from '@modules/Hero';
import Team_AboutUs from '@modules/about_us_TEAM';
import useScreenSize from 'src/util/screenSize';



import { useEffect, useState } from 'react';


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
					<ButtonForLink
						className='mt-8 sm:mt-14'
						colorText='text-white'
						text='See More'
						linkTo='/' //Aquí o desde onclick
						infoFor={'Intermission'}
					/>
				</TextContent>
			</Hero>
			<Section className={'sm:gap-y-15 gap-y-10'}>
				<Team_AboutUs
					screenSize={breakpoint}
					team={teamMembers}
				/>
			</Section>
			{/* <Footer /> */}
		</Main_screen>
	)
}

const teamMembersRAW = [
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
		imgSrc: 'team/team2.png',
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