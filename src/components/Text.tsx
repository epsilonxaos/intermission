import { twMerge } from 'tailwind-merge'

import type { TTextSpecial, TTexts } from '#types/main'

const Text = (opt: TTexts) => {
	const { children, className } = opt

	return <p className={twMerge('text-sm', className)}>{children}</p>
}

// base:16 => 20 => 24
export const TextTitle = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-base text-main sm:text-xl lg:text-2xl', className)}>{children}</article>
}

// base:14 => 18
export const TextContent = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-sm text-main sm:text-lg', className)}>{children}</article>
}

// base:12 => 16
export const TextSubcontent = (opt: TTexts) => {
	const { children, className } = opt
	return <p className={twMerge('text-xs text-main sm:text-base', className)}>{children}</p>
}

// base:20 => 30 => 52

export const TextSpecial = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-xl text-main sm:text-[30px] lg:text-[52px]', className)}>{children}</article>
}
