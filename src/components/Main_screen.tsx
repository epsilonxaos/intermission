import { twMerge } from 'tailwind-merge'

import type { TComponent } from '#types/main'

//Componente que engloba todo el contenido de la página
const Main_screen = (opt: TComponent) => {
	const { children, className } = opt
	return <div className={twMerge('bg-main-background flex-col bg-repeat', className)}>{children}</div>
}

export default Main_screen
