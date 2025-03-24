import { motion } from 'framer-motion'

const dots = Array.from({ length: 8 }) // 12 grupos de puntos
const radius = 50 // Radio del círculo

const DotsFooter = () => {
	return (
		<motion.div
			className='relative flex h-32 w-32 items-center justify-center'
			animate={{ rotate: 360 }}
			transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}>
			{dots.map((_, i) => {
				const angle = (i / dots.length) * Math.PI * 2
				const x = Math.cos(angle) * radius
				const y = Math.sin(angle) * radius

				return (
					<motion.div
						key={i}
						className='absolute h-3.5 w-3.5 rounded-full bg-white'
						style={{ top: y, left: x }}
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
					/>
				)
			})}
		</motion.div>
	)
}

export default DotsFooter
