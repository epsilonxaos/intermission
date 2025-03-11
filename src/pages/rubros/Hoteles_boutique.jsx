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

const dataHoteles = {
	title: 'Hoteles Boutique',
	iconSrc: `/imgs/rubros/icon_{rubro.docus}.svg`,
	colorBg: 'secon-b',
	cesSrc: ['/rubros/hoteles/hotel1.jpg', '/rubros/hoteles/hotel2.jpg', '/rubros/hoteles/hotel3.jpg'],
	clientes: logos,
}

const Hoteles = () => {
	const [dataHotel, setDataHotel] = useState(null)
	useEffect(() => {
		setDataHotel(dataHoteles)
	}, [])

	return (
		<Main_screen>
			<RubroTemplate />
		</Main_screen>
	)
}

export default Hoteles
