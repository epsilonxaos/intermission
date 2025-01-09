import Footer from '@modules/Footer'
import Header from '@modules/Header'

const Home = () => {
	return (
		<Main_screen>
			<Header />
			<Hero />
			<Otra_Section />
			<Footer />
		</Main_screen>
	)
}

//Componente que engloba todo el contenido de la página
const Main_screen = ({ children }) => {
	const minHeightStyle = {
		minHeight: '210vh',
	}

	return (
		<div
			style={minHeightStyle}
			className='bg-main-background flex-col bg-repeat'>
			{children}
		</div>
	)
}

const Hero = () => {
	return (
		// <div className='min-h-hero bg-hero-content flex flex-col items-center justify-center bg-contain bg-top bg-no-repeat'>
		<div className='min-h-hero bg-hero-content flex flex-col items-center justify-center gap-y-5 bg-cover bg-center'>
			{/* SI QUIERO MANEJARLO SIN EL GAP Y QUIERO UN COMPORTAMIENTO DIFERENTE ENTRE LOS ELEMENTOS ADENTRO */}
			{/* <div className='flex h-[15vh] w-full flex-col items-center justify-between'> */}
			<div className='bg-hero-animation h-24 w-full bg-cover bg-center sm:w-9/12 lg:w-7/12'></div>
			<h1 className='text-main sm:text-2xl lg:text-3xl'>A Digital Consultancey Company</h1>
		</div>
		// </div>
	)
}

const Otra_Section = () => {
	return (
		<div className='h-40 bg-red-400'>
			<h1>Esta es otra sección</h1>
		</div>
	)
}

export default Home
