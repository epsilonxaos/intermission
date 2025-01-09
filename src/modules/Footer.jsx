import { Link } from 'wouter'

const Footer = () => {
	return (
		<footer className='py-3 text-center text-main md:px-[55px] '>
			<div className='mx-auto flex max-w-section flex-col md:flex-row md:items-center md:justify-between'>
				<p>Project</p>
				<p>
					Diseño y desarrollo x{' '}
					<a
						href='https://www.madeby.partners/'
						target='_blank'
						rel='noopener noreferrer'>
						<span className='font-bold'>MadebyPartners®</span>
					</a>
				</p>
				<Link to='politicas-privacidad'>Políticas de privacidad</Link>
			</div>
		</footer>
	)
}

export default Footer
