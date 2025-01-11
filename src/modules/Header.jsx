import { useEffect, useState } from 'react'

const Header = () => {
	return (
		<nav className='absolute flex w-full justify-center'>
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
	// FUNCIONES DE APOYO PARA EL NAVBAR Y EL MENU DE HAMBURGUESA. Si se hace resize o click fuera del menú, se cierra
	useEffect(() => {
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
		window.addEventListener('resize', handleResize)
		document.addEventListener('click', handleClickOutside)
		return () => {
			window.removeEventListener('resize', handleResize)
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div
			className={`${hamburgerMenuStatus && 'h-fit flex-wrap'} max-w-navbar fixed inset-y-5 flex h-16 w-full items-center justify-center bg-[#0D3381] bg-opacity-10 backdrop-blur-md md:rounded-full`}>
			<ul
				className={`text-main flex h-16 w-full items-center justify-between px-8 transition-all duration-300 hover:bg-[#0D3381] hover:bg-opacity-30 sm:justify-evenly sm:px-0`}>
				<Bolitas />
				<ButtonHamburgerMenu statusAndSet={[hamburgerMenuStatus, setHamburgerMenuStatus]} />

				{/* Si no está activado el menú, de todas formas se esconden para celulares por sus propiedades */}
				{!hamburgerMenuStatus &&
					items.map(item => (
						<ItemComponent
							item={item}
							type={'menu'}
						/>
					))}
				{/* items.map(item => (
						<li
							key={item.name}
							className='hidden sm:block'>
							<a href={item.url}>{item.name} </a>
							<Adorno_link item={item} />
						</li>
					))} */}
			</ul>

			{/* Elemento desplegable del menú */}
			{hamburgerMenuStatus && (
				<ul className='text-main animate-fade-in w-full flex-col bg-[#0D3381] bg-opacity-15 py-4 transition-all duration-300 hover:bg-[#0D3381] hover:bg-opacity-30'>
					{items.map(item => (
						<ItemComponent
							item={item}
							type={'hamburger'}
						/>
					))}
				</ul>
			)}
			{/* {hamburgerMenuStatus && (
				// pt-4
				<ul className='text-main animate-fade-in w-full flex-col bg-[#0D3381] bg-opacity-15 py-4 transition-all duration-300 hover:bg-[#0D3381] hover:bg-opacity-30'>
					{items.map(item => (
						// bg-[#0D3381] bg-opacity-15
						<li
							key={item.name}
							className='animate-fade-in relative py-3 text-center transition-all delay-100 duration-300 hover:bg-[#0D3381] hover:bg-opacity-30'>
							<a href={item.url}>{item.name} </a>
							<Adorno_link item={item} />
						</li>
					))}
				</ul>
			)} */}
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
			'animate-fade-in relative py-3 text-center transition-all delay-100 duration-300 hover:bg-[#0D3381] hover:bg-opacity-30',
		menu: 'hidden sm:block',
	}
	return (
		<li
			key={item.name}
			className={classByType[type]}>
			<a href={item.url}>{item.name} </a>
			<Adorno_items_menu item={item} />
		</li>
	)
}

const Bolitas = () => {
	return (
		<div className='flex gap-1'>
			<div className='bolita'>*</div>
			<div className='bolita'>*</div>
			<div className='bolita'>*</div>
			<div className='bolita'>*</div>
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
					className={`h-6 w-6 transform transition-transform duration-300 ${hamburgerMenuStatus ? 'rotate-90' : ''}`}
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

const Adorno_items_menu = ({ item }) => {
	return (
		<>
			{/* <span className='inline-block h-1 w-1 rounded-full bg-white text-right text-xs leading-none text-white'> */}
			<span className='inline-block h-1 w-1 rounded-full bg-white'></span>
			<span className='absolute bottom-7 text-[7px] text-white'>{item.estrella}</span>
		</>
	)
}

export default Header
