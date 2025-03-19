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
const folderData = '/rubros/09 Servicios y productos tecnologicos/'

const dataServiciosYProductos = {
	contentHeader: 'GLUE X',
	title: 'Servicios y Productos tecnológicos',
	bannerSrc: `${folderData}banner_inicio.png`,
	iconSrc: `${folderData}icon_rubro.svg`,
	colorBgSrc: `${folderData}backgroundColor.png`,
	colorBg: '#003484',
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

const Servicios = () => {
	const [dataServicios, setDataServicios] = useState(null)
	const { breakpoint } = useScreenSize()
	useEffect(() => {
		setDataServicios(dataServiciosYProductos)
	}, [])

	useEffect(() => {
		setDataServicios({
			...dataServiciosYProductos,
			colorBgSrc: [
				`${folderData}backgroundColor.png`,
				`${folderData}${breakpoint !== 'xs' ? 'desk_' : 'mobile_'}backgroundColor.png`,
			],
		})
	}, [breakpoint])

	if (!dataServicios) return null

	return (
		<Main_screen>
			<RubroTemplate
				breakpoint={breakpoint}
				rubroData={dataServicios}
			/>
		</Main_screen>
	)
}

export default Servicios
