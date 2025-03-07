import Adorno_circulo_item from '@components/circle_decoration';

import { useEffect, useState } from 'react'

const Header = () => {
	return (
		<nav
			className='absolute z-50 flex w-full animate-fading-in justify-center'
			style={{
				'--transition-duration': '1000ms',
				'--translateY-initial': '-30px',
			}}>
			<Content />
		</nav>
	)
}

const Content = () => {
	const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false)
	const [items, setItems] = useState([])

	useEffect(() => {
		setItems(headerItems.items)
	}, [])
	const handleResize = () => {
		if (window.innerWidth > 640) {
			setHamburgerMenuStatus(false)
		}
	}
	const handleClickOutside = event => {
		if (!event.target.closest('nav')) {
			setHamburgerMenuStatus(false)
		}
	}
	// FUNCIONES DE APOYO PARA EL NAVBAR Y EL MENU DE HAMBURGUESA. Si se hace resize o click fuera del menú, se cierra
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		document.addEventListener('click', handleClickOutside)
		return () => {
			window.removeEventListener('resize', handleResize)
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div
			className={`${hamburgerMenuStatus && 'h-fit flex-wrap'} fixed flex h-16 w-full max-w-navbar items-center justify-center bg-[#0D3381] bg-opacity-10 backdrop-blur-md sm:inset-y-5 md:rounded-full`}>
			<ul
				className={`flex h-16 w-full items-center justify-between px-8 text-main transition-all hover:bg-[#0D3381] hover:bg-opacity-30 sm:justify-evenly sm:px-0`}>
				<Bolitas />
				<ButtonHamburgerMenu statusAndSet={[hamburgerMenuStatus, setHamburgerMenuStatus]} />

				{/* Si no está activado el menú, de todas formas se esconden para celulares por sus propiedades */}
				{!hamburgerMenuStatus &&
					items.map(item => (
						<ItemComponent
							key={item.name}
							item={item}
							type={'menu'}
						/>
					))}
			</ul>

			{/* Elemento desplegable del menú */}
			{hamburgerMenuStatus && (
				<ul
					className='w-full animate-fading-in flex-col bg-[#0D3381] bg-opacity-15 py-4 text-main transition-all hover:bg-[#0D3381] hover:bg-opacity-30'
					style={{
						'--transition-duration': '300ms',
						'--translateY-initial': '-10px',
					}}>
					{items.map(item => (
						<ItemComponent
							key={item.name}
							item={item}
							type={'hamburger'}
						/>
					))}
				</ul>
			)}
		</div>
	)
}

// Datos
const headerItems = {
	items: [
		{ name: 'Rubros', url: '/', estrella: 4 },
		{ name: 'About us', url: '/about_us', estrella: 1 },
		{ name: 'Partners', url: '/partners', estrella: 2 },
		{ name: 'Blog', url: '/blog', estrella: 4 },
		{ name: 'Contact', url: '/contact', estrella: 1 },
	],
}

// Componentes
const ItemComponent = ({ item, type }) => {
	// Podría ser un tipo
	const classByType = {
		hamburger:
			'animate-fading-in relative py-3 text-center transition-all delay-100 hover:bg-[#0D3381] hover:bg-opacity-30',
		menu: 'hidden sm:block',
	}
	return (
		<li
			key={item.name}
			className={classByType[type]}
			style={{
				'--transition-duration': '600ms',
				'--translateY-initial': '-20px',
			}}>
			<a href={item.url}>{item.name} </a>
			<Adorno_circulo_item
				item={item}
				margin='mx-0'
			/>
		</li>
	)
}

const Bolitas = () => {
	return (
		<div className='flex gap-1'>
			<Adorno_circulo_item
				size='lg-sz'
				margin='mx-0'
			/>
			<Adorno_circulo_item
				size='lg-sz'
				margin='mx-0'
			/>
			<Adorno_circulo_item
				size='lg-sz'
				margin='mx-0'
			/>
			<Adorno_circulo_item
				size='lg-sz'
				margin='mx-0'
			/>
		</div>
	)
}

const ButtonHamburgerMenu = ({ statusAndSet }) => {
	const [hamburgerMenuStatus, setHamburgerMenuStatus] = statusAndSet
	return (
		<div className='flex items-center sm:hidden'>
			<button
				className='text-white focus:outline-none'
				onClick={() => setHamburgerMenuStatus(!hamburgerMenuStatus)}>
				<svg
					className={`h-6 w-6 transform transition-transform ${hamburgerMenuStatus ? 'rotate-90' : ''}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d={hamburgerMenuStatus ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
				</svg>
			</button>
		</div>
	)
}

export default Header