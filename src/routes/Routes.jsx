import { Redirect, Route, Switch } from 'react-router';
import PrivateRoutes from './PrivateRoutes';
import { allRoutes } from './allRoutes';


function Routes() {
	return (
		<div style={ { minHeight: '100vh' } }>
			<Switch>
				{ allRoutes.map((route, item) =>
					route.isPrivate ? (
						<PrivateRoutes key={item} path={route.path} component={route.component}/>
					) : (
						<Route key={item} path={route.path} component={route.component} exact/>
					)
				) }
				<Redirect to='/error' />
			</Switch>
		</div>
	);
}

export default Routes;