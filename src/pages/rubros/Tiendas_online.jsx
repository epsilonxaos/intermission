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

const dataTiendasOnline = {
	title: 'Tiendas Online',
	iconSrc: `/imgs/rubros/icon_{rubro.docus}.svg`,
	colorBg: 'secon-g',
	cesSrc: ['/rubros/tiendas/tiendas1.jpg', '/rubros/tiendas/tiendas2.jpg', '/rubros/tiendas/tiendas3.jpg'],
	clientes: logos,
}

const Tiendas = () => {
	const [dataTiendas, setDataTiendas] = useState(null)
	useEffect(() => {
		setDataTiendas(dataTiendasOnline)
	}, [])

	return (
		<Main_screen>
			<RubroTemplate />
		</Main_screen>
	)
}

export default Tiendas
