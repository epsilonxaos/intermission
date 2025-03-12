import Main_screen from '@components/Main_screen'
import { Hero } from '@modules/Hero'
import RubroTemplate from '@modules/rubro_template'

import { useEffect, useState } from 'react'

const logos = [
	'/clientes/logo1.png',
	'/clientes/logo2.png',
	'/clientes/logo3.png',
	'/clientes/logo4.png',
	'/clientes/logo5.png',
	'/clientes/logo6.png',
]
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
			Ps: {
				1: 'Totem Beach Club, un hotel ubicado frente al mar, se centra en la promoción de dos áreas de negocio: hospedaje y day pass.',
				2: 'Durante enero, las campañas registraron un CTR inferior al 1.5%. Tras revisar el contenido y optimizar la estrategia digital, se realizó un análisis de los segmentos de mercado objetivo',
				3: 'Esta optimización resultó en un buen rendimiento, logrando incrementar el CTR hasta un 6.61% en los meses siguientes.',
			},
		},
		{
			imgSrc: `${folderData}CEs/2.png`,
			title: 'Casa Raco',
			ubicacion: 'Parras de la fuente, Coauila',
			Ps: {
				1: 'Casa Raco, un hotel boutique ubicado en Parras de la Fuente, experimentó un notable aumento en el valor de sus reservaciones gracias a la implementación de estrategias de marketing performance, análisis de datos y automatización en revenue management.',
				2: 'La tarifa promedio, que inicialmente era de 1,500 pesos, se incrementó hasta alcanzar los 3,800 pesos en el mes de octubre.Además, el RevPAR, que era de 565 pesos, subió hasta 1,143 pesos.',
				3: 'En total, las ventas crecieron un 110%.',
			},
		},
		{
			imgSrc: `${folderData}CEs/3.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			Ps: {
				1: 'Parrafo 1',
				2: 'Parrafo 2',
				3: 'Parrafo 3',
			},
		},
	],
	clientes: logos,
}

const Hoteles = () => {
	const [dataHotel, setDataHotel] = useState(null)
	useEffect(() => {
		setDataHotel(dataHoteles)
	}, [])

	if (!dataHotel) return null

	return (
		<Main_screen>
			<RubroTemplate rubroData={dataHotel} />
		</Main_screen>
	)
}

export default Hoteles
