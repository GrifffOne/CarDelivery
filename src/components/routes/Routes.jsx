import NotFound from '../screen/not-found/NotFound'
import { routes } from './routes.data'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
	return (
		<BrowserRouter basename='/CarDelivery'>
			<Routes>
				{routes.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
