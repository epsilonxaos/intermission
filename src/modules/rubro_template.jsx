import LogoCarousel from '@components/Carousel-logos'
import { Image } from '@components/Image'
import Section from '@components/Section'
import { TextContent, TextSmall, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import IMG_Hover from '@components/image_onHover'
import RubroServiciosCARR from '@components/rubros_servicios_CARR'
import { twMerge } from 'tailwind-merge'

const RubroTemplate = ({ rubroData, breakpoint, CEsContent }) => {
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
	const servicios = [
		{
			nameDoc: 'CDigital',
			title: { es: 'Consultoría Digital', en: 'Consultancy Company' },
			tasks: [
				'Investigación del mercado',
				'Metodología comercial digital',
				'Capacitación tecnológica',
				'Capacitación de ventas',
			],
		},
		{
			nameDoc: 'IEDigitales',
			title: { es: 'Implementación de Ecosistemas digitales', en: 'Digital Innovation' },
			tasks: [
				"Implementación de CRM (Kommo)",
				"Automatización de WhatsApp",
				"Configuración de activos",
				"Desarrollo de landing (cotizador)",
				"Capacitación ecosistema",
			],
		},
		{
			nameDoc: 'DSWeb',
			title: { es: 'Desarrollo de sitios web', en: 'Digital Performance' },
			tasks: [
				"UX: Experiencia de usuario",
				"UI: Diseño de interfaz",
				"Desarrollo de textos persuasivos",
				"Diseño web personalizado",
				"Desarrollo web a medida",
				
			],
		},
		{
			nameDoc: 'SPMedia',
			title: { es: 'Social paid Media', en: 'Digital Strategy' },
			tasks: [
				"Reconocimiento de objetivos",
				"Definición de segmentación",
				"Diseño de copie out y copie in",
				"Diseño visual de campañas",
				"Lanzamiento y optimización",
				
			],
		 },
	]

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
					<div className='max-w-[750px] text-left'>
						<TextTitle className='mb-4 sm:text-[22px]/[30px]'>{title}</TextTitle>
						<TextContent className='grid gap-y-4'>
							<p>Redefiniendo tu estrategia digital a través de la ciencia de datos</p>
							<p className='mr-3'>
								En un mundo donde el desorden y la complejidad son la norma, Intermission emerge como la pausa
								estratégica necesaria.
							</p>
							<p>
								Nos especializamos en crear claridad a partir del caos, conectando los puntos entre datos dispersos para
								revelar las oportunidades ocultas que impulsan el crecimiento de tu marca
							</p>
						</TextContent>
					</div>
					{/* //TODO CAMBIAR A COMPONENTE */}
					{breakpoint !== 'xs' && (
						<Image
							className='max-w-[85px]'
							src={iconSrc}
						/>
					)}
				</section>
			</Section>

			{/* NUESTRO SERVICIOS */}
			<Section className=''>
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
			<Section className='px-0 sm:px-0'>
				<TextTitle className='mb-10 self-start'>Casos de Éxito</TextTitle>
				{/* contenedor de imagenes */}
				<section className='flex w-full flex-col justify-between gap-y-8 sm:flex-row'>
					{cesData.map((CE, idx) => (
						<IMG_Hover
							className='max-h-[390px] text-center sm:max-h-[530px] sm:w-[30%]'
							key={idx}
							dataToDisplay={{
								imgSrc: CE.imgSrc,
								title: CE.title,
								subtitle: CE.ubicacion,
								colorOverlay: colorBg,
							}}>
							<TextSubcontent className='grid gap-y-8 px-4 text-left'>
								{CEsContent[idx] && CEsContent[idx]}
							</TextSubcontent>
						</IMG_Hover>
					))}
				</section>
			</Section>

			{/* CLIENTES */}
			<Section className=''>
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
