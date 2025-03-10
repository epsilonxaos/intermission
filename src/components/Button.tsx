import { twMerge } from 'tailwind-merge'

import type { TButto4Link, TButtonParams } from '#types/main'

import { Image } from './Image'
import { TextSubcontent } from './Text'

export const Button = (opt: TButtonParams) => {
	const { text, className, type = 'button', onClick } = opt

	return (
		<button
			className={twMerge(
				'btn btn-sm bg-amarillo text-verde hover:bg-amarillo min-w-[160px] border-none font-normal uppercase',
				className
			)}
			{...{ type }}
			{...(onClick && { onClick })}>
			{text}
		</button>
	)
}

export const ButtonForLink = (opt: TButto4Link) => {
	const { text, linkTo, className, type = 'button', onClick } = opt

	return (
		<button
			className={twMerge('flex items-center flex-row w-fit ', className)}
			{...{ type }}
			{...(onClick && { onClick })}
			{...(linkTo && { onClick: () => window.location.href = linkTo })}>
				<Image
					className='mr-2 inline-block h-[20px] w-[20px]'
					src={`/imgs/icon_Flecha_Derecha.svg`}
					alt={`Icono para más información sobre Intermission`}
					objectFit='contain'
				/>
				<TextSubcontent className='text-see-more sm:text-sm'>
					{text}
				</TextSubcontent>
		</button>
	)
}
