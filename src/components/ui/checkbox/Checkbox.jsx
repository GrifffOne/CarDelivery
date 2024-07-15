import styles from './Checkbox.module.scss'
import cn from 'clsx'


export const Checkbox = ({
	isChecked,
	onChange,
	children,
	register,
	name,
	options,
	error = '',
}) => {
	return (
		<label className={styles.checkbox_wrapper}>
			<input
				type='checkbox'
				className={cn(styles.checkbox_element, { [styles.error]: error })}
				{...register(name, options)}
				checked={isChecked}
				onChange={() => onChange((prev) => !prev)}
			/>
			<p>{children}</p>
			{!isChecked && <span>{error}</span>}
		</label>
	)
}
