import { twMerge } from 'tailwind-merge'

type TContainer = {
	children: React.ReactNode
	className?: string
	id?: string
}

const Container = ({ children, className, id }: TContainer) => (
	<section
		{...(id && { id })}
		className={twMerge(
			'mx-auto max-w-[1440px] px-[30px] py-[50px] md:px-[50px] md:py-[70px] lg:py-[100px] xl:px-[70px]',
			className
		)}>
		{children}
	</section>
)

export default Container
