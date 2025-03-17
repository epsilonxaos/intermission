import { twMerge } from 'tailwind-merge'

import type { TComponent } from '#types/main'

// import Bg_Image_Background from '../../public/imgs/fondo_negro.png'

//Componente que engloba todo el contenido de la página
const Main_screen = (opt: TComponent) => {
	const { children, className } = opt
	return (
		<div
			// style={{ backgroundImage: `url(${Bg_Image_Background})` }}
			className={twMerge('flex-col', className)}>
			{children}
		</div>
	)
}

export default Main_screen
