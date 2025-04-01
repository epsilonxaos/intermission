import Adorno_circulo_item from '@components/circle_decoration'
import { motion } from 'framer-motion'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Link } from 'wouter'

import { useState } from 'react'
import { HiOutlineArrowRightCircle } from 'react-icons/hi2'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image } from './Image'
import { TextSpecial, TextTitle } from './Text'

interface Rubro {
	name: string
	docus: string
	linkTo: string
}

interface RubrosCarruselProps {
	rubros: Rubro[]
}

type TProgressCircles = {
	totalSlides: number
	currentSlide: number
}
const ProgressCircles = ({ totalSlides, currentSlide }: TProgressCircles) => {
	const circles = Array.from({ length: totalSlides }, (_, i) => ({
		id: i,
		x: (i / (totalSlides - 1)) * 100,
		y: i % 2 === 0 ? 80 : 20,
	}))

	return (
		<div className='relative mb-6 h-20 w-full'>
			<svg className='absolute left-0 top-0 h-full w-full'>
				{circles.map((circle, i) =>
					i < currentSlide && circles[i] ? (
						<motion.line
							key={'circle-progress-' + circle.id}
							x1={`${circles[i].x}%`}
							y1={`${circles[i].y}%`}
							x2={`${circles[i + 1]?.x ?? circles[i].x}%`}
							y2={`${circles[i + 1]?.y ?? circles[i].y}%`}
							stroke='white'
							strokeWidth='2'
							strokeDasharray='600'
							strokeDashoffset='600'
							initial={{ strokeDashoffset: 600 }}
							animate={{ strokeDashoffset: 0 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
						/>
					) : null
				)}
			</svg>

			{circles.map(circle => (
				<motion.div
					key={circle.id}
					className='absolute size-[12px] rounded-full bg-white'
					style={{
						left: `${circle.x - 0.5}%`,
						top: `${circle.y - 6}%`,
						transform: 'translate(-49%, -50%)',
					}}
					initial={{ scale: 0.8, opacity: 0.5 }}
					animate={{ scale: circle.id <= currentSlide ? 1 : 0.8, opacity: circle.id <= currentSlide ? 1 : 0.5 }}
					transition={{ duration: 0.3 }}
				/>
			))}
		</div>
	)
}

const RubrosCarrusel = ({ rubros }: RubrosCarruselProps) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const totalSlides = rubros.length
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

	return (
		<div className='relative w-full'>
			<TextTitle className='mb-12 text-start md:text-end'>
				Rubros
				<Adorno_circulo_item size='lg-sz' />
			</TextTitle>

			{isMobile && (
				<div
					className='flex w-full flex-col gap-16 overflow-x-hidden md:flex-row'
					style={{ scrollSnapType: 'x mandatory' }}>
					{rubros.map((rubro, idx) => (
						<RubroContainer
							key={'rubro-home-' + idx}
							rubro={rubro}
						/>
					))}
				</div>
			)}

			{!isMobile && (
				<>
					<ProgressCircles
						totalSlides={totalSlides}
						currentSlide={currentSlide}
					/>

					<Swiper
						modules={[Autoplay]}
						spaceBetween={50}
						slidesPerView={1}
						autoplay={{ delay: 5000 }}
						speed={1500}
						loop
						onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
						className='h-full w-full'>
						{Array.from({ length: totalSlides }).map(
							(_, i) =>
								rubros[i] && (
									<SwiperSlide key={'slide-rubro-home-' + i}>
										<RubroContainer rubro={rubros[i]} />
									</SwiperSlide>
								)
						)}
					</Swiper>
				</>
			)}
		</div>
	)
}

const RubroContainer = ({ rubro }: { rubro: Rubro }) => (
	<div
		className='flex w-full flex-wrap items-center justify-between gap-y-4 md:flex-shrink-0'
		style={{ scrollSnapAlign: 'start' }}>
		<div className='flex flex-grow flex-row items-center gap-3 md:w-4/12 md:gap-5'>
			<Image
				className='size-[60px] invert lg:size-[80px]'
				src={`/imgs/rubros/${rubro.docus}.svg`}
				alt={`Icono de ${rubro.name}`}
				objectFit='contain'
			/>
			<div className='flex flex-col'>
				<TextSpecial className='text-left text-base font-bold sm:text-xl lg:text-3xl'>{rubro.name}</TextSpecial>
				<Link to={rubro.linkTo}>
					<button className='flex items-center gap-1 text-[#5C8BD5]'>
						<HiOutlineArrowRightCircle size={18} />
						See more
					</button>
				</Link>
			</div>
		</div>
		<Image
			className='min-h-[248px] min-w-[300px] flex-grow md:max-w-[60%]'
			src={`/imgs/rubros/${rubro.docus}.png`}
			alt={`Imagen de ${rubro.name}`}
			objectFit='cover'
		/>
	</div>
)

export default RubrosCarrusel
