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
const folderData = '/rubros/08 Tiendas Online/'
const dataTiendasOnline = {
	title: 'Tiendas Online',
	bannerSrc: `${folderData}banner_inicio.png`,
	iconSrc: `${folderData}icon_rubro.svg`,
	colorBgSrc: `${folderData}backgroundColor.png`,
	colorBg: '#00704F',
	clientes: logos,
	cesData: [
		{
			imgSrc: `${folderData}CEs/1.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			Ps: {
				1: 'Parrafo 1',
				2: 'Parrafo 2',
				3: 'Parrafo 3',
			},
		},
		{
			imgSrc: `${folderData}CEs/2.png`,
			title: 'Nombre del Hotel',
			ubicacion: 'Ubicación',
			Ps: {
				1: 'Parrafo 1',
				2: 'Parrafo 2',
				3: 'Parrafo 3',
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
}

const Tiendas = () => {
	const [dataTiendas, setDataTiendas] = useState(null)
	useEffect(() => {
		setDataTiendas(dataTiendasOnline)
	}, [])

	if (!dataTiendas) return null

	return (
		<Main_screen>
			<RubroTemplate rubroData={dataTiendas} />
		</Main_screen>
	)
}

export default Tiendas
