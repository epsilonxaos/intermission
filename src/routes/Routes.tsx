import About_us from '@pages/About_us'
import Blog from '@pages/Blog'
import Contact_us from '@pages/Contact_us'
import Home from '@pages/Home'
import Inmobiliario from '@pages/rubros/Desarrollo_inmobiliario'
import Hoteles from '@pages/rubros/Hoteles_boutique'
import Servicios from '@pages/rubros/Servicios_productos'
import Tiendas from '@pages/rubros/Tiendas_online'
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
				<Route
					path='/rubros/hoteles_boutique'
					component={Hoteles}
				/>
				<Route
					path='/rubros/desarrollo_inmobiliario'
					component={Inmobiliario}
				/>
				<Route
					path='/rubros/tiendas_online'
					component={Tiendas}
				/>
				<Route
					path='/rubros/servicios_productos_tecnologicos'
					component={Servicios}
				/>
				<Route
					path='/blog'
					component={Blog}
				/>
				<Route
					path='/contact_us'
					component={Contact_us}
				/>
				{/*
				
				<Route
					path='/partners'
					component={Partners}
				/> 
				*/}

				<Route>404: No such page!</Route>
			</Switch>
		</main>
	)
}

export default Routes
