import About from '../screen/about/About'
import Cases from '../screen/cases/Cases'
import Home from '../screen/home/Home'

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/cases',
		component: Cases,
	},
	{
		path: '/about',
		component: About,
	},
]
