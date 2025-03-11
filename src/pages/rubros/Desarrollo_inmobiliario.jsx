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

const dataDesarrolloInmobiliario = {
	title: 'Desarrollo Inmobiliario',
	iconSrc: `/imgs/rubros/icon_{rubro.docus}.svg`,
	colorBg: 'secon-r',
	cesSrc: [
		'/rubros/desarrollo/desarrollo1.jpg',
		'/rubros/desarrollo/desarrollo2.jpg',
		'/rubros/desarrollo/desarrollo3.jpg',
	],
	clientes: logos,
}

const Inmobiliario = () => {
	const [dataInmobiliario, setDataInmobiliario] = useState(null)
	useEffect(() => {
		setDataInmobiliario(dataDesarrolloInmobiliario)
	}, [])

	return (
		<Main_screen>
			<RubroTemplate />
		</Main_screen>
	)
}

export default Inmobiliario
