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
const folderData = '/rubros/08 Tiendas Online/'
const dataTiendasOnline = {
	title: 'Tiendas Online',
	bannerSrc: `${folderData}banner_inicio.png`,
	iconSrc: `${folderData}icon_rubro.svg`,
	colorBgSrc: `${folderData}backgroundColor.png`,
	colorBg: '#00704F',
	clientes: 'logos', // Por el momento se van, porque son los mismos. Entonces se toman del template
	cesData: [
		{
			imgSrc: `${folderData}CEs/1.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			content: null,
		},
		{
			imgSrc: `${folderData}CEs/2.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			content: null,
		},
		{
			imgSrc: `${folderData}CEs/3.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			content: null,
		},
	],
}

const Tiendas = () => {
	const [dataTiendas, setDataTiendas] = useState(null)
	const { breakpoint } = useScreenSize()
	useEffect(() => {
		setDataTiendas(dataTiendasOnline)
	}, [])

	useEffect(() => {
		setDataTiendas({
			...dataTiendasOnline,
			colorBgSrc: [
				`${folderData}backgroundColor.png`,
				`${folderData}${breakpoint !== 'xs' ? 'desk_' : 'mobile_'}backgroundColor.png`,
			],
		})
	}, [breakpoint])

	if (!dataTiendas) return null

	return (
		<Main_screen>
			<RubroTemplate
				breakpoint={breakpoint}
				rubroData={dataTiendas}
				CEsContent={[
					<>
						<p>
							<strong>Totem Beach Club</strong>, un hotel ubicado frente al mar, se centra en la promoción de dos áreas
							de negocio: hospedaje y day pass.
						</p>
						<p>
							Durante enero, las campañas registraron un <strong>CTR inferior al 1.5%</strong>. Tras revisar el
							contenido y optimizar la estrategia digital, se realizó un análisis de los segmentos de mercado objetivo.
						</p>
						<p>
							Esta optimización resultó en un buen rendimiento, logrando incrementar el{' '}
							<strong>CTR hasta un 6.61% en los meses siguientes</strong>.
						</p>
					</>,
					<>
						<p>
							<strong>Casa Raco</strong>, un hotel boutique ubicado en Parras de la Fuente, experimentó un notable
							aumento en el valor de sus reservaciones gracias a la implementación de estrategias de marketing
							performance, análisis de datos y automatización en revenue management.
						</p>
						<p>
							La tarifa promedio, que inicialmente era de 1,500 pesos,{' '}
							<strong>se incrementó hasta alcanzar los 3,800 pesos</strong> en el mes de octubre.Además, el RevPAR, que
							era de 565 pesos, subió hasta 1,143 pesos.
						</p>
						<p>
							<strong>En total, las ventas crecieron un 110%.</strong>
						</p>
					</>,
					<>
						<p>
							<strong>Totem Beach Club</strong>, un hotel ubicado frente al mar, se centra en la promoción de dos áreas
							de negocio: hospedaje y daypass.{' '}
						</p>
						<p>
							Durante enero, las campañas registraron un <strong>CTR inferior al 1.5%</strong>. Tras revisar el
							contenido y optimizar la estrategia digital, se realizó un análisis de los segmentos de mercado objetivo.{' '}
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

export default Tiendas
