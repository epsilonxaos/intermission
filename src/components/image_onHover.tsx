import { twMerge } from 'tailwind-merge'

import { useState } from 'react'

import { Image } from './Image'
import { TextContent, TextSmall } from './Text'
import Adorno_circulo_item from './circle_decoration'

const IMG_Hover = ({ children, className, dataToDisplay, isBlog, whereDisplayPreHover }: any) => {
	const { imgSrc, title, subtitle, colorOverlay } = dataToDisplay
	const [isHovering, setIsHovering] = useState(false)

	return (
		<div
			className={twMerge('relative flex h-full w-full overflow-hidden', className)}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}>
			{/* Texto parte inferior, antes del hover */}
			{/* SON DOS OPCIONES, El primero por si es blog, el segundo por defecto y si no están haciendo hover */}
			{isBlog && (
				<div className={twMerge(`mb-3 flex text-left ${isHovering ? 'invisible' : 'visible'}`, whereDisplayPreHover)}>
					<TextContent className='min-w-fit'>
						0{isBlog}
						<Adorno_circulo_item size='sm-sz' />
					</TextContent>
					<article>
						<TextContent>{title}</TextContent>
						<TextSmall className=''>{subtitle}</TextSmall>
					</article>
				</div>
			)}
			{!isHovering && !isBlog && (
				<div className={twMerge('absolute bottom-5 left-0 right-0', whereDisplayPreHover)}>
					<TextSmall className=''>
						<strong>{title}</strong> <br />
						{subtitle}
					</TextSmall>
				</div>
			)}

			{/* Cubre el CE, antes del hover */}
			<Image
				src={imgSrc}
				alt={isBlog ? 'Imagen referencia del blog Intermission' : 'Caso de éxito Intermission'}
				className='w-full transition-transform duration-300 group-hover:scale-105'
				objectFit='cover'
			/>

			{/* Información que aparece cuando se hace hover */}
			<div
				className={`absolute inset-0 flex flex-col items-center justify-center overflow-y-scroll p-4 transition-opacity duration-300 sm:justify-start ${
					isHovering ? 'opacity-80' : 'opacity-0'
				}`}
				style={{ backgroundColor: colorOverlay }}>
				{children}
			</div>
		</div>
	)
}

export default IMG_Hover
