import Main_screen from '@components/Main_screen'
import { Hero } from '@modules/Hero'
import RubroTemplate from '@modules/rubro_template'
import useScreenSize from 'src/util/screenSize'

import { useEffect, useState } from 'react'

const logos = [
	'/clientes/logo1.png',
	'/clientes/logo2.png',
	'/clientes/logo3.png',
	'/clientes/logo4.png',
	'/clientes/logo5.png',
	'/clientes/logo6.png',
]
const folderData = '/rubros/07 Desarrollos Inmobiliarios/'
const dataDesarrolloInmobiliario = {
	title: 'Desarrollo Inmobiliario',
	bannerSrc: `${folderData}banner_inicio.png`,
	iconSrc: `${folderData}icon_rubro.svg`,
	colorBgSrc: `${folderData}backgroundColor.png`,
	colorBg: '#B62121',
	clientes: 'logos', // Por el momento se van, porque son los mismos. Entonces se toman del template
	cesData: [
		{
			imgSrc: `${folderData}CEs/1.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			Ps: null,
		},
		{
			imgSrc: `${folderData}CEs/2.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			Ps: null,
		},
		{
			imgSrc: `${folderData}CEs/3.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			Ps: null,
		},
	],
}

const Inmobiliario = () => {
	const [dataInmobiliario, setDataInmobiliario] = useState(null)
	const { breakpoint } = useScreenSize()
	useEffect(() => {
		setDataInmobiliario(dataDesarrolloInmobiliario)
	}, [])

	useEffect(() => {
		setDataInmobiliario({
			...dataDesarrolloInmobiliario,
			colorBgSrc: [
				`${folderData}backgroundColor.png`,
				`${folderData}${breakpoint !== 'xs' ? 'desk_' : 'mobile_'}backgroundColor.png`,
			],
		})
	}, [breakpoint])

	if (!dataInmobiliario) return null

	return (
		<Main_screen>
			<RubroTemplate
				breakpoint={breakpoint}
				rubroData={dataInmobiliario}
				CEsContent={[
					<>
						<p>
							<strong>Nombre del Real State</strong>, un hotel ubicado frente al mar, se centra en la promoción de dos
							áreas de negocio: hospedaje y daypass
						</p>
						<p className='flex justify-between'>
							<strong>Crecimiento</strong>
							<strong>CTR</strong>
							<strong>
								Estrategia <br /> digital
							</strong>
						</p>
						<p>
							Durante enero, las campañas registraron un <strong>CTR inferior al 1.5%</strong>. Tras revisar el
							contenido y optimizar la estrategia digital, se realizó un análisis de los segmentos de mercado objetivo
						</p>
						<p>
							Esta optimización resultó en un buen rendimiento, logrando incrementar el{' '}
							<strong>CTR hasta un 6.61% en los meses siguientes</strong>.
						</p>
					</>,
					<>
						<p>
							<strong>Nombre del Real State</strong>, un hotel ubicado frente al mar, se centra en la promoción de dos
							áreas de negocio: hospedaje y daypass
						</p>
						<p className='flex justify-between'>
							<strong>Crecimiento</strong>
							<strong>CTR</strong>
							<strong>
								Estrategia <br /> digital
							</strong>
						</p>
						<p>
							Durante enero, las campañas registraron un <strong>CTR inferior al 1.5%</strong>. Tras revisar el
							contenido y optimizar la estrategia digital, se realizó un análisis de los segmentos de mercado objetivo
						</p>
						<p>
							Esta optimización resultó en un buen rendimiento, logrando incrementar el{' '}
							<strong>CTR hasta un 6.61% en los meses siguientes</strong>.
						</p>
					</>,
					<>
						<p>
							<strong>Nombre del Real State</strong>, un hotel ubicado frente al mar, se centra en la promoción de dos
							áreas de negocio: hospedaje y daypass
						</p>
						<p className='flex justify-between'>
							<strong>Crecimiento</strong>
							<strong>CTR</strong>
							<strong>
								Estrategia <br /> digital
							</strong>
						</p>
						<p>
							Durante enero, las campañas registraron un <strong>CTR inferior al 1.5%</strong>. Tras revisar el
							contenido y optimizar la estrategia digital, se realizó un análisis de los segmentos de mercado objetivo
						</p>
						<p>
							Esta optimización resultó en un buen rendimiento, logrando incrementar el{' '}
							<strong>CTR hasta un 6.61% en los meses siguientes</strong>.
						</p>
					</>,
				]}
			/>
		</Main_screen>
	)
}

export default Inmobiliario
