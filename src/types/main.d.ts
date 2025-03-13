import type { ReactNode } from 'react'

declare global {
	const APP_ENV: {
		APP_URL?: string
		API_URL?: string
	}
}

export type THTMLButtonTypeAttribute = 'submit' | 'reset' | 'button'
export type THTMLInputTypeAttribute =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'

export type TEventStateApp = {}
export type TEventActionApp = Partial<TEventStateApp>

export type TButtonParams = {
	text: string
	type?: THTMLButtonTypeAttribute
	className?: string
	onClick?: () => void
}

export type TButto4Link = TButtonParams & {
	linkTo: string
	infoFor: string
	iconType?: '1' | '2'
}

type TContentReact = {
	children: ReactNode
	className?: string
}

export type TTexts = {
	children: ReactNode
	className?: string
}

export type TTextAndLink = TTexts & {
	to: string
}

export type TTextSpecial = TTexts & {
	min?: string
	med?: string
	max?: string
	bold?: boolean
}

export type TComponent = Partial<TContentReact>

export type TItem4CircleDecoration = {
	item?: { name: string; url: string; estrella: number }
	size?: string
	bottom?: string
	margin?: string
	color?: string
}
