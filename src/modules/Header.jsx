import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Link } from 'wouter'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const useContextHeader = createContext()

const Header = () => {
	const [open, setOpen] = useState(false)
	const [openSubmenu, setOpenSubmenu] = useState(false)
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
	const [height, setHeight] = useState(0)

	return (
		<useContextHeader.Provider value={{ setHeight, isMobile, setOpen, openSubmenu, setOpenSubmenu }}>
			<header className='fixed left-0 top-0 z-50 w-full text-white md:pt-[26px]'>
				<motion.nav
					initial={{ height: 56 }}
					animate={{ height: height + 56 }}
					className='mx-auto bg-secon-b/10 px-9 py-4 backdrop-blur-[70px] md:w-[90%] md:max-w-[800px] md:justify-center md:rounded-[20px] md:px-5'>
					<div className='relative mx-auto flex w-full max-w-[690px] items-center justify-between gap-12'>
						<Link to='/'>
							<CircleAnimation />
						</Link>

						{!isMobile && (
							<Menu
								setHeight={setHeight}
								className='flex items-center justify-center gap-12'
							/>
						)}

						{isMobile && (
							<button onClick={() => setOpen(!open)}>
								<svg
									className={`h-6 w-6 transform transition-transform ${open ? 'rotate-90' : ''}`}
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
								</svg>
							</button>
						)}
					</div>
				</motion.nav>

				{open && isMobile && (
					<nav className='fixed left-0 top-0 -z-10 flex h-full w-full flex-col items-center justify-center gap-12 bg-secon-b/10 backdrop-blur-[70px]'>
						<Menu className='flex w-full flex-col items-start justify-start gap-12 px-9 text-left' />
					</nav>
				)}
			</header>
		</useContextHeader.Provider>
	)
}

const SubMenuList = ({ menuList, className, id }) => {
	const ref = useRef(null)
	const { setHeight } = useContext(useContextHeader)

	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.offsetHeight)
		}
	}, [ref.current])

	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			ref={ref}
			className={twMerge('absolute left-0 top-full w-[250px] rounded-b-[20px] py-3 pt-6 text-sm', className)}>
			<ul className={'grid list-disc grid-cols-1 gap-2 pl-4 text-white'}>
				{menuList.map((item, idx) => (
					<MenuButton
						key={'submenu-link-' + id + '-' + idx}
						to={item.url}
						number={item.number}>
						{item.name}
					</MenuButton>
				))}
			</ul>
		</motion.div>
	)
}

const MenuList = [
	{
		name: 'Rubros',
		number: 4,
		showSubmenu: true,
		submenu: (
			<SubMenuList
				menuList={[
					{
						name: 'Desarrollos Inmobiliarios',
						url: '/rubros/desarrollo_inmobiliario',
					},
					{
						name: 'Hoteles Boutique',
						url: '/rubros/hoteles_boutique',
					},
					{
						name: 'Tiendas Online',
						url: '/rubros/tiendas_online',
					},
					{
						name: 'Servicios y productos tecnológicos',
						url: '/rubros/servicios_productos_tecnologicos',
					},
				]}
			/>
		),
	},
	{ name: 'About us', url: '/about_us', number: 1 },
	{ name: 'Partners', url: '/partners', number: 2 },
	{ name: 'Blog', url: '/blog', number: 4 },
	{ name: 'Contact', url: '/contact_us', number: 1 },
]

const Menu = ({ className, showDots = false }) => (
	<ul className={className}>
		{MenuList.map((item, idx) => (
			<MenuButton
				key={'menu-link-' + idx}
				to={item.url}
				number={item.number}
				showSubmenu={item.showSubmenu}
				submenu={item.submenu}>
				{item.name}
			</MenuButton>
		))}
	</ul>
)

const MenuButton = ({ className, to, children, number, showSubmenu, submenu }) => {
	// const [open, setOpen] = useState(false)
	const { setHeight, setOpen, openSubmenu, setOpenSubmenu } = useContext(useContextHeader)

	useEffect(() => {
		if (!openSubmenu) {
			setHeight(0)
		}
	}, [openSubmenu])

	return (
		<>
			<li className='relative'>
				{to ? (
					<Link
						onClick={() => {
							setOpenSubmenu(false)
							setOpen(false)
						}}
						to={to}
						className={twMerge(
							'!hover:[text-shadow:_0_0px_0px_rgb(95_95_95)] relative pr-2 text-white/90 transition-all hover:text-white',
							className
						)}>
						{children}

						{number && <span className='absolute bottom-[3px] right-0 size-1 rounded-full bg-white' />}
						{number && <span className='absolute -right-[4px] bottom-[5px] text-[10px]'>{number}</span>}
					</Link>
				) : (
					<button
						type='button'
						onClick={() => setOpenSubmenu(!openSubmenu)}
						className={twMerge(
							'!hover:[text-shadow:_0_0px_0px_rgb(95_95_95)] relative pr-2 text-white/90 transition-all hover:text-white',
							className
						)}>
						{children}

						{number && <span className='absolute bottom-[3px] right-0 size-1 rounded-full bg-white' />}
						{number && <span className='absolute -right-[4px] bottom-[5px] text-[10px]'>{number}</span>}
					</button>
				)}

				{openSubmenu && showSubmenu && submenu}
			</li>

			{openSubmenu && showSubmenu && (
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 0.5 }}
					className='absolute left-0 right-0 top-[35px] h-[1px] bg-white/80'
				/>
			)}
		</>
	)
}

const circles = [
	{
		className: 'mr-4',
	},
	{
		className: '',
	},
	{
		className: '',
	},
	{
		className: 'ml-1 relative top-[6px]',
	},
]
const CircleAnimation = () => {
	const duration = 0.5
	const [hovered, setHovered] = useState(false)

	return (
		<div
			className='flex items-center justify-center gap-[1px]'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			{circles.map((c, idx) => (
				<motion.div
					key={'circle-header-' + idx}
					className={twMerge('size-3 rounded-full bg-white', c.className)}
					initial={{ y: 0 }}
					animate={hovered ? { y: [0, -20, 0] } : { y: 0 }}
					transition={
						hovered
							? {
									duration: duration * 2,
									times: [0, 0.5, 1],
									delay: idx * 0.2,
								}
							: {}
					}
				/>
			))}
		</div>
	)
}

export default Header
