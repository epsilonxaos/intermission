import About_us from '@pages/About_us'
import Home from '@pages/Home'
import { Route, Switch } from 'wouter'

const Routes = () => {
	return (
		<main>
			<Switch>
				<Route
					path='/'
					component={Home}
				/>
				<Route
					path='/about_us'
					component={About_us}
				/>
				{/* <Route
					path='/rubros'
					component={Rubros}
				/>
				<Route
					path='/partners'
					component={Partners}
					<Route
						path='/blog'
						component={Blog}
					/> 
					<Route
						path='/contact_us'
						component={Contact}
					/> 
				/> 
				*/}

				<Route>404: No such page!</Route>
			</Switch>
		</main>
	)
}

export default Routes
