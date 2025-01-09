const Header = () => {
	return (
		<header className='absolute flex w-full justify-center'>
			<Content />
		</header>
	)
}

const Content = () => {
	return (
		// <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
		// <div className='max-w-navbar fixed inset-y-5 flex h-16 w-full items-center justify-center bg-black bg-opacity-50 lg:rounded-full'>
		<div className='max-w-navbar fixed inset-y-5 flex h-16 w-full items-center justify-center bg-[#0D3381] bg-opacity-10 backdrop-blur-md md:rounded-full'>
			<ul className='text-main flex w-full justify-evenly'>
				<Bolitas />
				<li>
					Rubros{' '}
					{/* <span className='inline-block h-1 w-1 rounded-full bg-white text-right text-xs leading-none text-white'> */}
					<span className='inline-block h-1 w-1 rounded-full bg-white'></span>
					<span className='absolute bottom-7 text-[7px] text-white'>4</span>
				</li>
				<li>
					About us <span className='inline-block h-1 w-1 rounded-full bg-white'></span>
					<span className='absolute bottom-7 text-[7px] text-white'>1</span>
				</li>
				<li>
					Partners <span className='inline-block h-1 w-1 rounded-full bg-white'></span>
					<span className='absolute bottom-7 text-[7px] text-white'>2</span>
				</li>
				<li>
					Blog <span className='inline-block h-1 w-1 rounded-full bg-white'></span>
					<span className='absolute bottom-7 text-[7px] text-white'>4</span>
				</li>
				<li>
					Contact <span className='inline-block h-1 w-1 rounded-full bg-white'></span>
					<span className='absolute bottom-7 text-[7px] text-white'>1</span>
				</li>
			</ul>
		</div>
	)
}

// Datos
const headerItems = {
	items: [
		{ name: 'Rubros', url: '/rubros', estrella: 4 },
		{ name: 'About us', url: '/about', estrella: 1 },
		{ name: 'Partners', url: '/partners', estrella: 2 },
		{ name: 'Blog', url: '/blog', estrella: 4 },
		{ name: 'Contact', url: '/contact', estrella: 1 },
	],
}

// Componentes
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
export default Header
