import { twMerge } from 'tailwind-merge';



import type { TTextSpecial, TTexts } from '#types/main'

const Text = (opt: TTexts) => {
	const { children, className } = opt

	return <p className={twMerge('text-sm', className)}>{children}</p>
}

// base:16 => 20 => 24
export const TextTitle = (opt: TTexts) => {
	const { children, className } = opt
	return <h2 className={twMerge('text-base text-main sm:text-xl lg:text-2xl', className)}>{children}</h2>
}

// base:14 => 18
export const TextContent = (opt: TTexts) => {
	const { children, className } = opt
	return <p className={twMerge('text-sm text-main sm:text-lg', className)}>{children}</p>
}

// base:12 => 16
export const TextSubcontent = (opt: TTexts) => {
	const { children, className } = opt
	return <span className={twMerge('text-center text-xs text-main sm:text-base', className)}>{children}</span>
}

// base:20 => 52

export const TextSpecial = (opt: TTexts) => {
	const { children, className } = opt
	return <h1 className={twMerge('text-xl text-main sm:text-[30px] lg:text-[52px]', className)}>{children}</h1>
}