import styles from './Button.module.scss'
import cn from 'clsx'


const Button = ({
	id = null,
	children,
	clickHandler = null,
	size = 'xl',
	disabled = false,
}) => {
	return (
		<div className={styles.wrapper}>
			<button 
				id={id}
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
				disabled={disabled}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
