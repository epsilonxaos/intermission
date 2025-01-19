export const Image = ({
	src,
	alt,
	width,
	height,
	objectFit,
	className,
}: {
	src: string
	alt: string
	width?: number
	height?: number
	objectFit: React.CSSProperties['objectFit']
	className?: string
}) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			style={{ objectFit }}
			className={className}
		/>
	)
}
