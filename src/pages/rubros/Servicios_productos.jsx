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

const dataServiciosYProductos = {
	title: 'Servicios y Productos tecnológicos',
	iconSrc: `/imgs/rubros/icon_{rubro.docus}.svg`,
	colorBg: 'secon-b',
	cesSrc: ['/rubros/servicios/servicios1.jpg', '/rubros/servicios/servicios2.jpg', '/rubros/servicios/servicios3.jpg'],
	clientes: logos,
}

const Servicios = () => {
	const [dataServicios, setDataServicios] = useState(null)
	useEffect(() => {
		setDataServicios(dataServiciosYProductos)
	}, [])

	return (
		<Main_screen>
			<RubroTemplate />
		</Main_screen>
	)
}

export default Servicios
