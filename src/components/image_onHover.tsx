import { twMerge } from 'tailwind-merge'

import { useState } from 'react'

import { Image } from './Image'
import { TextSmall } from './Text'

const IMG_Hover = ({ children, className, dataToDisplay }: any) => {
	const { imgSrc, title, subtitle, colorOverlay } = dataToDisplay
	const [isHovering, setIsHovering] = useState(false)
	return (
		<div
			className={twMerge('relative flex h-full w-full object-center', className)}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}>
			{/* Cubre el CE, antes del hover */}
			<Image
				src={imgSrc}
				alt='Caso de éxito Intermission'
				// className='w-full transition-transform duration-300 group-hover:scale-105'
				className='w-full object-center'
				objectFit='cover'
			/>
			{/* Texto parte inferior, antes del hover */}

			{isHovering ? null : (
				<div className='absolute bottom-5 left-0 right-0'>
					<TextSmall className=''>
						<strong>{title}</strong> <br />
						{subtitle}
					</TextSmall>
				</div>
			)}
			{/* Información que aparece cuando se hace hover */}
			<div
				className={`dev-cnt absolute inset-0 flex flex-col items-center justify-center bg-blue-400 p-4 transition-opacity duration-300 ${
					isHovering ? 'opacity-80' : 'opacity-0'
				}`}
				style={{ backgroundColor: colorOverlay }}>
				{children}
			</div>
		</div>
	)
}

export default IMG_Hover
