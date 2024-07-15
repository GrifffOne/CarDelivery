import cn from 'clsx'
import styles from './ALert.module.scss'
import { useState } from 'react'

const Alert = ({ type = 'success', text }) => {
	return (
		<div
			className={cn(
				styles.alert,
				styles[type] 
			)}
		>
			{text}
		</div>
	)
}

export default Alert


