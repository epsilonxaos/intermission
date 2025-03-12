import { twMerge } from 'tailwind-merge'

import type { TComponent } from '#types/main'

import { ReactNode } from 'react'

const Section = (opt: TComponent & { classBackground?: string; styleBG?: React.CSSProperties }) => {
	const { children, className, classBackground, styleBG } = opt
	return (
		// BACKGROUND PARA SECCIÓN
		<BackForSection
			className={twMerge('place-content-center', classBackground)}
			style={styleBG}>
			{/* CONTENEDOR */}
			<div className='mx-auto flex max-w-section flex-col items-center justify-center border-2 border-red-700 py-10 text-center'>
				{/* CONTENIDO */}
				<div
					className={`flex w-full max-w-section-content flex-col items-center justify-center border-2 border-blue-700 px-8 text-main sm:px-8 ${className}`}>
					{children}
				</div>
			</div>
		</BackForSection>
	)
}

const BackForSection = ({
	children,
	className,
	style,
}: {
	children: ReactNode
	className?: string
	style?: React.CSSProperties
}) => {
	return (
		<div
			className={twMerge('', className)}
			style={style}>
			{children}
		</div>
	)
}

export default Section
