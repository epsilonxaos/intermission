import AppContext from '@contexts/AppContext'
import Routes from '@routes/Routes'
import { Toaster } from 'sonner'

import type { TEventActionApp, TEventStateApp } from '#types/main'

import { useReducer } from 'react'

const initialArgs = { lotes: [] }
const reducer = (state: TEventStateApp, action: TEventActionApp): TEventStateApp => ({ ...state, ...action })

function App() {
	const [state, dispatch] = useReducer(reducer, initialArgs)

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<Toaster />
			<Routes />
		</AppContext.Provider>
	)
}

export default App
