import { twMerge } from 'tailwind-merge'

import type { TInputParams } from '#types/forms'

export default function Input(opt: Readonly<TInputParams>) {
	const { name, label, type = 'text', className, placeholder, value, id, disabled, validate, onChange } = opt

	return (
		<label
			htmlFor={name}
			className={twMerge('form-control w-full', className)}>
			{label &&
			<div className='label'>
				<span className='label-text'>
					{label} {validate && <span className='font-bold text-red-500'>*</span>}
				</span>
			</div>}
			<input
				className={twMerge('input w-full bg-transparent border-2 border-[#003484] px-3 py-4 rounded-none  placeholder:text-[#808080] text-[#808080] !shadow-none !outline-none', `${validate?.validateErrorMessage ? 'border-2 border-red-500' : ''}`)}
				{...(id && { id: name })}
				{...(type && { type })}
				{...{ name }}
				{...(placeholder && { placeholder })}
				{...(value && { value })}
				{...(disabled && { disabled })}
				{...(validate && validate.register(name, validate.rules))}
				{...(!validate && { name })}
				{...(onChange && { onChange })}
			/>
			<div className='label'>
				{validate?.validateErrorMessage && (
					<span className='text-xs text-red-500'>{validate.validateErrorMessage}</span>
				)}
			</div>
		</label>
	)
}
