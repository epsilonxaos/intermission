import ScrollToTop from '@components/ScrollToTop'
import AppContext from '@contexts/AppContext'
import Footer from '@modules/Footer'
import Header from '@modules/Header'
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
			<ScrollToTop />
			<Toaster />
			<Header />
			<Routes />
			<Footer />
		</AppContext.Provider>
	)
}

export default App
