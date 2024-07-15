import { useLocation } from 'react-router-dom'

import { onlyText } from '../clearText'
import { MetaNoIndex } from './MetaNoIndex'

import logoImage from '../../../public/images/logotype/logo.svg'
import { Helmet } from 'react-helmet-async'
import { siteName, titleMerge } from '../../config/seo.config'

const VITE_URL = import.meta.env.VITE_URL


export const Meta = ({ title, description, image = null, children }) => {
	const { pathname } = useLocation()

	const currentUrl = `${VITE_URL}${pathname}`

	return (
		<>
			{description ? (
				<Helmet>
					<title itemProp='headline'>{titleMerge(title)}</title>
					<meta
						itemProp='description'
						name='description'
						content={onlyText(description, 152)}
					/>
					<link rel='canonical' href={currentUrl} />
					<meta property='og:locale' content='ru_RU' />
					<meta property='og:title' content={titleMerge(title)} />
					<meta property='og:url' content={currentUrl} />
					<meta property='og:image' content={image || logoImage} />
					<meta property='og:site_name' content={siteName} />
					<meta
						property='og:description'
						content={onlyText(description, 197)}
					/>
				</Helmet>
			) : (
				<MetaNoIndex title={title} />
			)}
			{children}
		</>
	)
}
