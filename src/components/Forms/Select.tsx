import { twMerge } from 'tailwind-merge'

import type { TInputParams } from '#types/forms'

export default function Select(opt: Readonly<TInputParams>) {
	const { name, label, options, className, id, disabled, validate, onChange } = opt

	return (
		<div className={twMerge('relative z-0 w-full', className)}>
			{label && <label
				htmlFor={name}
				className={`mb-1 block text-sm ${validate?.validateErrorMessage ? 'border-2 border-none text-red-500' : ''}`}>
				{label}
				{validate && <span className='text-verde font-bold'>*</span>}
			</label>}

			<select
				defaultValue={0}
				className={twMerge('select bg-transparent w-full px-2 py-4 rounded-none border-2 border-[#003484] text-[#808080] !shadow-none !outline-none', `${validate?.validateErrorMessage ? 'border-2 border-red-500' : ''}`)}
				{...(id && { id: name })}
				{...{ name }}
				{...(disabled && { disabled })}
				{...(validate && validate.register(name, validate.rules))}
				{...(!validate && { name })}
				{...(onChange && { onChange })}>
				<option className=' text-[#808080]' value="0" disabled hidden>Seleccione una opción</option>
				{options &&
					options.map((op, idx) => (
						<option
							className='bg-white text-sm text-[#808]'
							key={'select_' + name + '_' + idx}
							value={op.value}>
							{op.name}
						</option>
					))}
			</select>

			{validate?.validateErrorMessage && <span className='text-xs text-red-500'>{validate.validateErrorMessage}</span>}
		</div>
	)
}
