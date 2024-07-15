import cn from 'clsx'
import Header from './header/Header'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<div
			className={cn(styles.wrapper)}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />

			{heading && <h1 className={styles.heading}>{heading}</h1>}

			{children && <div>{children}</div>}

			<Footer />
		</div>
	)
}

export default Layout
