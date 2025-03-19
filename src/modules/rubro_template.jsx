import LogoCarousel from '@components/Carousel-logos'
import { Image } from '@components/Image'
import Section from '@components/Section'
import { TextContent, TextSmall, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import IMG_Hover from '@components/image_onHover'
import RubroServiciosCARR from '@components/rubros_servicios_CARR'
import { twMerge } from 'tailwind-merge'

const RubroTemplate = ({ rubroData, breakpoint }) => {
	const { contentHeader = null, title, bannerSrc, iconSrc, colorBgSrc, colorBg, cesData } = rubroData
	const clientes = [
		'/imgs/clientes/1.svg',
		'/imgs/clientes/2.svg',
		'/imgs/clientes/3.svg',
		'/imgs/clientes/4.svg',
		'/imgs/clientes/1.svg',
		'/imgs/clientes/2.svg',
		'/imgs/clientes/3.svg',
		'/imgs/clientes/4.svg',
	]
	const servicios = [{ nameDoc: 'CDigital' }, { nameDoc: 'IEDigitales' }, { nameDoc: 'DSWeb' }, { nameDoc: 'SPMedia' }]

	return (
		<>
			{/* Banner */}
			<Section
				classBackground='bg-no-repeat bg-cover bg-center h-[540px] sm:h-[635px]'
				styleBG={{ backgroundImage: `url("${bannerSrc}")` }}>
				{contentHeader && contentHeader}
			</Section>

			{/* INFORMACION */}
			<Section className='xl:px-0'>
				<section className='flex w-full items-start justify-between'>
					{breakpoint === 'xs' && (
						<div className='max-w-[750px] text-left'>
							<TextTitle className='mb-4'>{title}</TextTitle>
							<TextContent className='grid gap-y-4'>
								<p>
									Redefiniendo tu estrategia digital a través de la ciencia de datos{' '}
									<Adorno_circulo_item
										size='md-sz'
										item={{ estrella: 1 }}
										margin='mx-0'
										color='#00704F'
									/>
								</p>
								<p className='mr-3'>
									En un mundo donde el desorden y la complejidad son la norma, Intermission{' '}
									<Adorno_circulo_item
										size='md-sz'
										item={{ estrella: 2 }}
										margin='mx-0 mr-[14px]'
										color='#00704F'
									/>
									emerge como la pausa estratégica necesaria.
								</p>
								<p>
									Nos especializamos en crear claridad a partir
									<Adorno_circulo_item
										size='md-sz'
										item={{ estrella: 3 }}
										margin='mx-0 mr-[14px]'
										color='#00704F'
									/>
									del caos, conectando los puntos entre datos dispersos para revelar las oportunidades ocultas que
									impulsan el crecimiento de tu marca
								</p>
							</TextContent>
						</div>
					)}
					{/* //TODO CAMBIAR A COMPONENTE */}
					{breakpoint !== 'xs' && (
						<div className='max-w-[750px] text-left'>
							<TextTitle className='mb-4'>{title}</TextTitle>
							<Image
								className=''
								src={'/rubros/Servicios/texto_Intermission.svg'}
							/>
						</div>
					)}
					{breakpoint !== 'xs' && (
						<Image
							className='max-w-[85px]'
							src={iconSrc}
						/>
					)}
				</section>
			</Section>

			{/* NUESTRO SERVICIOS */}
			<Section className='pt-8 pb-10 sm:pb-20 sm:pt-16 pt-120,180 71,92'>
				<RubroServiciosCARR
					breakpoint={breakpoint}
					servicios={servicios}
					folderPath={'/rubros/Servicios/'}
				/>
			</Section>

			{/* PROCESOs */}
			<Section
				styleBG={{ backgroundImage: `url("${colorBgSrc[0]}")` }}
				className='px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0'>
				<Image
					className='w-full'
					src={colorBgSrc[1]}
					alt='Proceso de Intermission'
				/>
			</Section>

			{/* CASOS DE EXITO */}
			<Section className='xl:px-0'>
				<TextTitle className='mb-10 self-start'>Casos de Éxito</TextTitle>
				{/* contenedor de imagenes */}
				<section className='flex w-full flex-col justify-between gap-y-8 sm:flex-row'>
					{cesData.map((CE, idx) => (
						<IMG_Hover
							className='max-h-[390px] sm:max-h-[530px] sm:w-[30%]'
							key={idx}
							dataToDisplay={{
								imgSrc: CE.imgSrc,
								title: CE.title,
								subtitle: CE.ubicacion,
								colorOverlay: colorBg,
							}}>
							<TextSubcontent className='grid gap-y-8 px-4 text-left'>
								<p>{CE.Ps['1']}</p>
								<p>{CE.Ps['2']}</p>
								<p>{CE.Ps['3']}</p>
							</TextSubcontent>
						</IMG_Hover>
					))}
				</section>
			</Section>

			{/* CLIENTES */}
			<Section className='gap-y-5 sm:gap-y-10'>
				<TextContent className='hidden sm:block'>Clientes</TextContent>
				<TextContent className='block self-start sm:hidden'>
					Clientes
					<Adorno_circulo_item
						className=''
						size='md-sz'
					/>
				</TextContent>
				<LogoCarousel
					logos={clientes}
					direction='left'
				/>
			</Section>
		</>
	)
}

const ContainerForProcess = ({ children }) => <div className='flex flex-grow justify-around'>{children}</div>
const TextForProcess = ({ children, className, isData = false }) => (
	<TextTitle className={twMerge('font-bold', className, isData ? 'grid gap-y-4' : '')}>{children}</TextTitle>
)
const TextContentForProcess = ({ children }) => (
	<TextContent className='text-left font-normal sm:text-sm'>{children}</TextContent>
)

export default RubroTemplate
