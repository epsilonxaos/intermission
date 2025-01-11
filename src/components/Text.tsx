import { twMerge } from 'tailwind-merge'

import type { TTexts } from '#types/main'

const Text = (opt: TTexts) => {
	const { children, className } = opt

	return <p className={twMerge('text-sm', className)}>{children}</p>
}

export const TextTitle = (opt: TTexts) => {
	const { children, className } = opt

	return <h2 className={twMerge('text-main text-base sm:text-xl lg:text-2xl', className)}>{children}</h2>
}

// Text.Title = Title
// export default Text

export const TextContent = (opt: TTexts) => {
	const { children, className } = opt
	return <p className={twMerge('text-main text-sm sm:text-lg', className)}>{children}</p>
}
export const TextSubcontent = (opt: TTexts) => {
	const { children, className } = opt
	return <h3 className={twMerge('text-main text-xl font-medium lg:text-[26px]', className)}>{children}</h3>
}

export const TextSpecial = (opt: TTexts) => {
	const { children, className } = opt
	return <h1 className={twMerge('text-main text-xl font-medium lg:text-[26px]', className)}>{children}</h1>
}
