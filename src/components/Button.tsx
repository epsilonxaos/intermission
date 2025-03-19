import { twMerge } from 'tailwind-merge';



import type { TButto4Link, TButtonParams } from '#types/main';



import { Image } from './Image';
import { TextSubcontent } from './Text';


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
	const { text, linkTo, colorText, iconType = '1', className, type = 'button', onClick } = opt
	const typeOfIcon = {
		1: '/imgs/icon_Flecha_Derecha.svg',
		2: '/imgs/icon_Flecha_derecha_2.svg',
	}
	return (
		<button
			className={twMerge('flex w-fit flex-row items-center text-center', className)}
			{...{ type }}
			{...(onClick && { onClick })}
			{...(linkTo && { onClick: () => (window.location.href = linkTo) })}>
			<Image
				className={`mr-2 inline-block ${iconType === '1' ? 'h-[20px] w-[20px]' : 'h-[11px] w-[11px]'}`}
				src={typeOfIcon[iconType]}
				alt={`Icono para más información sobre Intermission`}
				objectFit='contain'
			/>
			<TextSubcontent
				className={twMerge(
					`sm:text-sm`,
					iconType === '1' ? 'text-see-more' : 'text-white',
					colorText ? colorText : ''
				)}>
				{text}
			</TextSubcontent>
		</button>
	)
}