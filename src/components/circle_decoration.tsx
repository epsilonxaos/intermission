import type { TItem4CircleDecoration } from '#types/main'

const Adorno_circulo_item = ({
	item = { name: '', url: '', estrella: 0 },
	size = 'sm-sz',
	bottom = '8px',
	margin = 'mx-1',
	color = 'white',
}: TItem4CircleDecoration) => {
	const sizes: any = {
		'sm-sz': { textSize: '7px', circle: 'h-1 w-1' },
		'md-sz': { textSize: '9px', circle: 'h-2 w-2' },
		'lg-sz': { textSize: '12px', circle: 'size-[9px]' },
	}

	return (
		<span className={`relative ${margin} inline-block`}>
			{/* <span className='inline-block h-1 w-1 rounded-full bg-white text-right text-xs leading-none text-white'> */}
			<span
				className={`${sizes[size].circle} inline-block rounded-full`}
				style={{ backgroundColor: color }}></span>
			<span
				className={`absolute bottom-[${bottom}] text-[${sizes[size].textSize}]`}
				style={{ color: color }}>
				{item.estrella !== 0 ? item.estrella : ''}
			</span>
		</span>
	)
}

export default Adorno_circulo_item
