import { Helmet } from 'react-helmet-async'
import { titleMerge } from '../../config/seo.config'


export const MetaNoIndex = ({ title = 'Error' }) => {
	return (
		<Helmet>
			<title>{titleMerge(title)}</title>
			<meta name='robots' content='noindex, nofollow' />
		</Helmet>
	)
}
