import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import { HelmetProvider } from 'react-helmet-async'

import Router from './components/routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<Router />
		</HelmetProvider>
	</React.StrictMode>
)
