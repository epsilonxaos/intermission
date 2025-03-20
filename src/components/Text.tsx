import { twMerge } from 'tailwind-merge'

import type { TTextAndLink, TTextSpecial, TTexts } from '#types/main'

const Text = (opt: TTexts) => {
	const { children, className } = opt

	return <p className={twMerge('text-sm', className)}>{children}</p>
}

// base:16 => 20 => 24
export const TextTitle = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-base text-main sm:text-[22px]/[30px] lg:text-2xl', className)}>{children}</article>
}

// base:14 => 18
export const TextContent = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-sm text-main sm:text-lg', className)}>{children}</article>
}

// base:12 => 16
export const TextSubcontent = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-xs text-main sm:text-base', className)}>{children}</article>
}

// Base:10 =>
export const TextSmall = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-[10px]/[14px]', className)}>{children}</article>
}
// base:20 => 30 => 52

export const TextSpecial = (opt: TTexts) => {
	const { children, className } = opt
	return <article className={twMerge('text-xl text-main md:text-3xl', className)}>{children}</article>
}

export const TextComponent = (opt: TTexts) => {
	const { children, className } = opt
	return <p className={className}>{children}</p>
}

export const TextLinkTo = (opt: TTextAndLink) => {
	const { children, className, to } = opt
	return (
		<a
			className={className}
			href={`${to}`}
			target='_blank'
			rel='noopener noreferrer'>
			{children}
		</a>
	)
	// return <a className={twMerge('text-sm text-main sm:text-lg', className)}>{children}</a>
}
