import Main_screen from '@components/Main_screen'
import { Hero } from '@modules/Hero'
import RubroTemplate from '@modules/rubro_template'
import useScreenSize from 'src/util/screenSize'

import { useEffect, useState } from 'react'

const folderData = '/rubros/06 Hoteles Boutique/'
const dataHoteles = {
	title: 'Hoteles Boutique',
	bannerSrc: `${folderData}banner_inicio.png`,
	iconSrc: `${folderData}icon_rubro.svg`,
	colorBgSrc: `${folderData}backgroundColor.png`,
	colorBg: '#003484',
	cesData: [
		{
			imgSrc: `${folderData}CEs/1.png`,
			title: 'Totem Beach Club',
			ubicacion: 'Celestún, Yucatán, México',
			content: null,
		},
		{
			imgSrc: `${folderData}CEs/2.png`,
			title: 'Casa Raco',
			ubicacion: 'Parras de la fuente, Coauila',
			content: null,
		},
		{
			imgSrc: `${folderData}CEs/3.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			content: null,
		},
	],
	clientes: 'logos', // Por el momento se van, porque son los mismos
}

const Hoteles = () => {
	const [dataHotel, setDataHotel] = useState(null)
	const { breakpoint } = useScreenSize()
	useEffect(() => {
		setDataHotel(dataHoteles)
	}, [])

	useEffect(() => {
		setDataHotel({
			...dataHoteles,
			colorBgSrc: [
				`${folderData}backgroundColor.png`,
				`${folderData}${breakpoint !== 'xs' ? 'desk_' : 'mobile_'}backgroundColor.png`,
			],
		})
	}, [breakpoint])

	if (!dataHotel) return null

	return (
		<Main_screen>
			<RubroTemplate
				breakpoint={breakpoint}
				rubroData={dataHotel}
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

export default Hoteles
