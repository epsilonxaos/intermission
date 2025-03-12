import LogoCarousel from '@components/Carousel-logos'
import { Image } from '@components/Image'
import Section from '@components/Section'
import { TextContent, TextSmall, TextSubcontent, TextTitle } from '@components/Text'
import Adorno_circulo_item from '@components/circle_decoration'
import IMG_Hover from '@components/image_onHover'
import useScreenSize from 'src/util/screenSize'
import { twMerge } from 'tailwind-merge'

const RubroTemplate = ({ rubroData }) => {
	const { title, bannerSrc, iconSrc, colorBgSrc, colorBg, cesData, clientes } = rubroData
	const { breakpoint } = useScreenSize()

	return (
		<>
			{/* Banner */}
			<Section
				classBackground='bg-center h-[540px] sm:h-[635px]'
				styleBG={{ backgroundImage: `url("${bannerSrc}")` }}></Section>

			{/* INFORMACION */}
			<Section className='xl:px-0'>
				<section className='flex w-full items-start justify-between'>
					<div className='dev-cnt max-w-[750px] text-left'>
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
					{/* //TODO CAMBIAR A COMPONENTE */}
					{breakpoint !== 'xs' && (
						<Image
							className='max-w-[85px] bg-white fill-white'
							src={iconSrc}
						/>
					)}
				</section>
			</Section>

			<Section>
				{/* NUESTRO SERVICIOS */}
				<section>TODO: Carrusel entero con botones(secuencial y directo)</section>
			</Section>

			{/* PROCESOs */}
			<Section
				className='min-h-[460px] xl:px-0'
				styleBG={{ backgroundImage: `url("${colorBgSrc}")` }}>
				<TextTitle className='mb-10 self-start md:mb-20'>
					Proceso Total
					<Adorno_circulo_item size='lg-sz' />
				</TextTitle>
				<section className='dev-cnt flex w-full flex-col justify-between gap-y-14 md:flex-row'>
					{/* //EN DUPLAS */}
					<ContainerForProcess>
						<TextForProcess>
							Briefing
							<Adorno_circulo_item size='lg-sz' />
						</TextForProcess>
						<TextForProcess isData>
							<span>
								<Adorno_circulo_item size='lg-sz' />
								Ecosistema
							</span>
							<TextContentForProcess>
								<ul>
									<li>CRM</li>
									<li>Landing</li>
									<li>Automat</li>
									<li>Embudo</li>
								</ul>
							</TextContentForProcess>
						</TextForProcess>
					</ContainerForProcess>

					<ContainerForProcess>
						<TextForProcess isData>
							<span>
								Estrategia
								<Adorno_circulo_item size='lg-sz' />
							</span>
							<TextContentForProcess>
								<ul>
									<li>CRM</li>
									<li>Landing</li>
									<li>Automat</li>
									<li>Embudo</li>
								</ul>
							</TextContentForProcess>
						</TextForProcess>
						<TextForProcess>
							<Adorno_circulo_item size='lg-sz' />
							Aprobación
						</TextForProcess>
					</ContainerForProcess>

					<ContainerForProcess>
						<TextForProcess isData>
							<span>
								Lanzamiento
								<Adorno_circulo_item size='lg-sz' />
							</span>
							<TextContentForProcess>
								<ul>
									<li>CRM</li>
									<li>Landing</li>
									<li>Automat</li>
									<li>Embudo</li>
								</ul>
							</TextContentForProcess>
						</TextForProcess>
						<TextForProcess isData>
							<span>
								<Adorno_circulo_item size='lg-sz' />
								Seguimiento
							</span>
							<TextContentForProcess>
								<ul>
									<li>CRM</li>
									<li>Landing</li>
									<li>Automat</li>
									<li>Embudo</li>
								</ul>
							</TextContentForProcess>
						</TextForProcess>
					</ContainerForProcess>
				</section>
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
			<Section className='gap-y-10 sm:gap-y-14'>
				<TextTitle>Clientes</TextTitle>
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
