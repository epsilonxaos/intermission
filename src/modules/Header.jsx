import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Link } from 'wouter'

import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
	const [open, setOpen] = useState(false)
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

	return (
		<header className='fixed left-0 top-0 z-50 w-full text-white md:pt-[26px]'>
			<nav className='mx-auto flex items-center justify-between gap-12 bg-secon-b/10 px-9 py-4 backdrop-blur-[70px] md:w-[90%] md:max-w-[800px] md:justify-center md:rounded-[20px] md:px-5'>
				<Link to='/'>
					<CircleAnimation />
				</Link>

				{!isMobile && <Menu className='flex items-center justify-center gap-12' />}

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
			</nav>

			{open && isMobile && (
				<nav className='fixed left-0 top-0 -z-10 flex h-full w-full flex-col items-center justify-center gap-12 bg-secon-b/10 backdrop-blur-[70px]'>
					<Menu className='flex w-full flex-col items-start justify-start gap-12 px-9 text-left' />
				</nav>
			)}
		</header>
	)
}

const MenuList = [
	{ name: 'Rubros', url: '/', number: 4 },
	{ name: 'About us', url: '/about_us', number: 1 },
	{ name: 'Partners', url: '/partners', number: 2 },
	{ name: 'Blog', url: '/blog', number: 4 },
	{ name: 'Contact', url: '/contact', number: 1 },
]

const Menu = ({ className, showDots = false }) => (
	<ul className={className}>
		{MenuList.map((item, idx) => (
			<MenuButton
				key={'menu-link-' + idx}
				to={item.url}
				number={item.number}>
				{item.name}
			</MenuButton>
		))}
	</ul>
)

const MenuButton = ({ className, to, children, number }) => (
	<Link
		to={to ?? '/'}
		className={twMerge(
			'!hover:[text-shadow:_0_0px_0px_rgb(95_95_95)] relative pr-2 text-white/90 transition-all hover:text-white',
			className
		)}>
		{children}

		<span className='absolute bottom-[3px] right-0 size-1 rounded-full bg-white' />
		{number && <span className='absolute -right-[4px] bottom-[5px] text-[10px]'>{number}</span>}
	</Link>
)

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
