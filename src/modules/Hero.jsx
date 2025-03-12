import { TextSpecial } from '@components/Text'
import { twMerge } from 'tailwind-merge'

export const Hero = ({ children, textClassName, divClassName }) => {
	return (
		// <div className='min-h-hero bg-hero-content flex flex-col items-center justify-center bg-contain bg-top bg-no-repeat'>
		// <div className='min-h-hero bg-hero-content flex flex-col items-center justify-center gap-y-5 bg-cover bg-center'>
		// OJO ESTE PODRÏA VENIR DESDE PROPS, PARA MODULARIDAD
		<div
			className='flex min-h-hero animate-fading-in flex-col items-center justify-center gap-y-5 bg-cover bg-center'
			style={{
				backgroundImage: "url('/imgs/fondo_circulo_1.png')",
				// CUIDADO, SE MEZCLAN LOS ESTILOS
				// '--transition-duration': '5000ms',
				// '--translateY-initial': '30px',
			}}>
			{/* SI QUIERO MANEJARLO SIN EL GAP Y QUIERO UN COMPORTAMIENTO DIFERENTE ENTRE LOS ELEMENTOS ADENTRO */}
			{/* <div className='flex h-[15vh] w-full flex-col items-center justify-between'> */}
			<div className='h-24 w-full bg-hero-animation-home bg-cover bg-center sm:w-9/12 lg:w-7/12'></div>
			<div className={divClassName}>
				<TextSpecial className={twMerge('px-7 text-center', textClassName)}>{children}</TextSpecial>
			</div>
		</div>
		// </div>
	)
}
