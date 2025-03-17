import type { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

import type { THTMLInputTypeAttribute } from './main'

export type TInputParams = {
	name: string
	label?: string
	type?: THTMLInputTypeAttribute
	className?: string
	placeholder?: string
	value?: string | number
	id?: boolean
	options?: TOptionSelect[]
	disabled?: boolean
	validate?: {
		register: UseFormRegister<FieldValues>
		rules?: Pick<RegisterOptions<FieldValues>, 'pattern' | 'maxLength' | 'minLength' | 'validate' | 'required'>
		validateErrorMessage?: string
	}
	onChange?: (e: any) => void
}

export type TOptionSelect = { value: string | number; name: string }
