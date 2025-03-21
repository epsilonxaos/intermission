import { twMerge } from 'tailwind-merge'

import { useRef, useState } from 'react'

import { Image } from './Image'
import { TextSubcontent, TextTitle } from './Text'
import Adorno_circulo_item from './circle_decoration'

type TDataService = {
	nameDoc: string
	title: { es: string; en: string }
	tasks: string[]
}
type TServices = {
	servicios: TDataService[]
	folderPath: string
}

const RubroServiciosCARR = (props: any) => {
	const { folderPath, servicios }: TServices = props
	const { breakpoint } = props
	const [currService, setCurrService] = useState(0)
	const carruselRef = useRef(null)

	const handleNextService = () => {
		setCurrService(prevIndex => (prevIndex === servicios.length - 1 ? 0 : prevIndex + 1))
	}
	const handlePrevService = () => {
		setCurrService(prevIndex => (prevIndex === 0 ? servicios.length - 1 : prevIndex - 1))
	}
	const handleChosen = (idx: number) => {
		setCurrService(idx)
	}

	return (
		<div className='flex w-full flex-col items-center'>
			<TextTitle className='mb-5 self-start sm:self-center sm:text-[22px]/[30px]'>Nuestros Servicios</TextTitle>
			{/* CONTROLES DIRECTO */}
			<div className='mb-12 flex h-8 w-[100vw] max-w-[550px] justify-around invert sm:mb-8 sm:h-14 sm:justify-between'>
				{servicios.map((servicio, idx) => (
					<ButtonCarouselRubros
						key={'servicio-' + idx}
						nameDoc={`${folderPath}icons_servicios/${servicio.nameDoc}.svg`}
						changeChosen={() => handleChosen(idx)}
					/>
				))}
			</div>
			{/* Carrusel */}
			<div className='relative flex w-full flex-col place-items-center sm:flex-row'>
				<div
					ref={carruselRef}
					className='w-full overflow-hidden'>
					<div
						className={twMerge('flex transition-transform duration-700 ease-in-out')}
						style={{ transform: `translateX(-${currService * 100}%)` }}>
						{servicios.map((servicio, idx) => (
							<article
								key={idx}
								className={
									'flex w-full flex-shrink-0 flex-col-reverse justify-between p-1 sm:min-h-[400px] sm:flex-row sm:items-center'
								}>
								<div className='flex flex-col gap-[13px] sm:gap-[30px]'>
									<section className='h-fit pr-2'>
										{breakpoint !== 'xs' ? (
											<div className='flex gap-4'>
												<Adorno_circulo_item
													color='#00704F'
													size='md-sz'
												/>
												<div>
													<TextSubcontent>{servicio.title.en}</TextSubcontent>
													<TextTitle>{servicio.title.es}</TextTitle>
												</div>
											</div>
										) : (
											<TextTitle>{servicio.title.es}</TextTitle>
										)}
									</section>

									<ul className='pl-2 pr-4 sm:pl-4'>
										{servicio.tasks.map((act, idx) => (
											<li
												key={idx}
												className='flex items-center gap-2'>
												<Adorno_circulo_item
													margin='mx-1 self-start'
													color='#00704F'
													size='md-sz'
												/>
												<TextSubcontent>{act}</TextSubcontent>
											</li>
										))}
									</ul>
								</div>
								<Image
									src={`${folderPath}imgs_servicios/${servicio.nameDoc}.png`}
									alt='Trabajos realizados'
									objectFit='contain'
									className='w-full sm:w-[66%]'
								/>
							</article>
						))}
					</div>
				</div>
				{/* CONTROLES, Anterior, Siguiente */}
				<div
					className={twMerge(
						'absolute z-10 flex justify-between sm:w-full sm:scale-[107%] md:scale-105',
						breakpoint === 'xs' ? 'bottom-5 right-0 w-[20%]' : ''
					)}>
					<div
						onClick={handlePrevService}
						className='h-[17px] w-[23px] sm:h-[19px] sm:w-[25px]'>
						<Image
							className='rotate-180'
							src={`/imgs/icon_Flecha_Derecha.svg`}
							alt={`Flecha izquierda de carrusel para Partners de Intermission`}
							objectFit='contain'
						/>
					</div>
					<div
						onClick={handleNextService}
						className='h-[17px] w-[23px] sm:h-[19px] sm:w-[25px]'>
						<Image
							className=''
							src={`/imgs/icon_Flecha_Derecha.svg`}
							alt={`Flecha derecha de carrusel para Partners de Intermission`}
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const ButtonCarouselRubros = (props: any) => {
	const { nameDoc, changeChosen } = props
	return (
		<div
			className=''
			onClick={changeChosen}>
			<Image
				className='h-[40px] w-[60px] hover:scale-110 md:h-full md:w-auto'
				src={`${nameDoc}`}
				alt='Servicios Intermission'
				objectFit='contain'
			/>
		</div>
	)
}

export default RubroServiciosCARR
