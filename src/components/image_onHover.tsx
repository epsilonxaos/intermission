import chroma from 'chroma-js'
import { twMerge } from 'tailwind-merge'

import { Image } from './Image'
import { TextContent, TextSmall } from './Text'
import Adorno_circulo_item from './circle_decoration'

// TODO: Revisar si es necesario el whereDisplayPreHover
const IMG_Hover = ({ children, className, dataToDisplay, isBlog = false, whereDisplayPreHover }: any) => {
	const { imgSrc, title, subtitle, colorOverlay } = dataToDisplay

	return (
		<div className={className}>
			<div
				className={twMerge(
					'group relative mx-auto flex h-full w-full max-w-[420px] overflow-hidden',
					isBlog ? 'flex-col' : ''
				)}>
				{/* Texto parte inferior, antes del hover */}
				{isBlog ? (
					<div className={twMerge(`mb-2 flex text-left opacity-100 transition duration-300 group-hover:opacity-0`)}>
						<TextContent className='min-w-fit'>
							{isBlog}
							<Adorno_circulo_item size='sm-sz' />
						</TextContent>
						<article>
							<TextContent>{title}</TextContent>
							<TextSmall className=''>{subtitle}</TextSmall>
						</article>
					</div>
				) : (
					<div className='absolute bottom-5 left-0 right-0 block bg-black/30 opacity-100 transition duration-300 group-hover:opacity-0'>
						<TextSmall>
							<strong>{title}</strong> <br />
							{subtitle}
						</TextSmall>
					</div>
				)}
				<Image
					src={imgSrc}
					alt={isBlog ? 'Imagen referencia del blog Intermission' : 'Caso de éxito Intermission'}
					className='h-full max-h-[530px] min-h-[350px] w-full transition-transform duration-300 group-hover:scale-150'
					objectFit='cover'
				/>
				{/* Información que aparece cuando se hace hover */}
				<div
					className='absolute inset-0 flex h-full flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
					style={{ backgroundColor: chroma(colorOverlay).alpha(0.8).css() }}>
					<div className='mx-auto h-full max-w-[350px] overflow-y-scroll'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default IMG_Hover
