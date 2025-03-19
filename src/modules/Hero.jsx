import fondo from '@assets/img/fondo_media_luna_1920.png'
import { TextSpecial } from '@components/Text'
import { twMerge } from 'tailwind-merge'

export const Hero = ({ children, divClassName }) => {
	return (
		<section
			//TODO: min-[600px]
			className='min-[600px] flex h-svh flex-col items-center justify-center gap-y-5 bg-cover bg-center bg-no-repeat text-white'
			style={{
				backgroundImage: 'url(' + fondo + ')',
			}}>
			<div className={twMerge('w-full text-center', divClassName)}>{children}</div>
		</section>
	)
}
