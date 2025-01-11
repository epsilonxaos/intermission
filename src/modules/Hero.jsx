export const Hero = () => {
	return (
		// <div className='min-h-hero bg-hero-content flex flex-col items-center justify-center bg-contain bg-top bg-no-repeat'>
		// <div className='min-h-hero bg-hero-content flex flex-col items-center justify-center gap-y-5 bg-cover bg-center'>
		// OJO ESTE PODRÏA VENIR DESDE PROPS, PARA MODULARIDAD
		<div
			className='animate-fading-in min-h-hero bg-hero-content flex flex-col items-center justify-center gap-y-5 bg-cover bg-center'
			style={{
				// CUIDADO, SE MEZCLAN LOS ESTILOS
				// '--transition-duration': '5000ms',
				'--translateY-initial': '30px',
			}}>
			{/* SI QUIERO MANEJARLO SIN EL GAP Y QUIERO UN COMPORTAMIENTO DIFERENTE ENTRE LOS ELEMENTOS ADENTRO */}
			{/* <div className='flex h-[15vh] w-full flex-col items-center justify-between'> */}
			<div className='bg-hero-animation h-24 w-full bg-cover bg-center sm:w-9/12 lg:w-7/12'></div>
			<h1 className='text-main text-xl sm:text-2xl lg:text-3xl'>A Digital Consultancey Company</h1>
		</div>
		// </div>
	)
}
