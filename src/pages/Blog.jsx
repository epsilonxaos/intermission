import { ButtonForLink } from '@components/Button'
import Main_screen from '@components/Main_screen'
import Section from '@components/Section'
import { TextSmall, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import IMG_Hover from '@components/image_onHover'
import { Hero } from '@modules/Hero'

import { useEffect, useState } from 'react'

const folderData = '/blog/'
const blogs = [
	{
		title: 'Nombre del Blog',
		subtitle: 'Un hotel ubicado frente al mar, se centra en la promoción de dos áreas de negocio: hospedaje.',
		imgSrc: `${folderData}1.png`,
		color: '#00704F',
	},
	{
		title: 'Nombre del Blog',
		subtitle: 'Un hotel ubicado frente al mar, se centra en la promoción de dos áreas de negocio: hospedaje.',
		imgSrc: `${folderData}2.png`,
		color: '#003484',
	},
	{
		title: 'Nombre del Blog',
		subtitle: 'Un hotel ubicado frente al mar, se centra en la promoción de dos áreas de negocio: hospedaje.',
		imgSrc: `${folderData}3.png`,
		color: '#B62121',
	},
	{
		title: 'Nombre del Blog',
		subtitle: 'Un hotel ubicado frente al mar, se centra en la promoción de dos áreas de negocio: hospedaje.',
		imgSrc: `${folderData}1.png`,
		color: '#00704F',
	},
	{
		title: 'Nombre del Blog',
		subtitle: 'Un hotel ubicado frente al mar, se centra en la promoción de dos áreas de negocio: hospedaje.',
		imgSrc: `${folderData}2.png`,
		color: '#003484',
	},
	{
		title: 'Nombre del Blog',
		subtitle: 'Un hotel ubicado frente al mar, se centra en la promoción de dos áreas de negocio: hospedaje.',
		imgSrc: `${folderData}3.png`,
		color: '#B62121',
	},
]

const Blog = () => {
	const [articles, setArticles] = useState(null)
	useEffect(() => {
		setArticles(blogs)
	}, [])

	if (!articles) return null

	return (
		<Main_screen>
			<Hero>A Digital Consultancy Company</Hero>
			<Section className='xl:px-0'>
				{/* Contenedor de articulos */}
				<section className='grid w-full gap-11 sm:grid-cols-3'>
					{articles.map((art, idx) => (
						<IMG_Hover
							className='sm:max-[500px] max-h-[400px] flex-col justify-between'
							key={idx}
							isBlog={(idx % 3) + 1}
							dataToDisplay={{
								imgSrc: art.imgSrc,
								title: art.title,
								subtitle: art.subtitle,
								colorOverlay: art.color,
							}}>
							<div className='flex h-full flex-col items-center justify-between'>
								<span className='mt-4'>
									{(idx % 3) + 1}
									<Adorno_circulo_item size='md-sz' />
								</span>

								<article>
									<TextTitle>{art.title}</TextTitle>
									<TextSmall>{art.subtitle}</TextSmall>
								</article>

								<ButtonForLink
									className='w-[130px] place-content-center rounded-full border-2 p-1'
									text='SEE MORE'
									linkTo='/'
									iconType='2'
								/>
							</div>
						</IMG_Hover>
					))}
				</section>
			</Section>
		</Main_screen>
	)
}

export default Blog
