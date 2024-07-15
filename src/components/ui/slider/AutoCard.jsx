import styles from './Slider.module.scss'

const AutoCard = ({
	brand,
	model,
	year,
	engine,
	transmission,
	fuel,
	drive,
}) => {
	return (
		<div className={styles.card_props}>
			<div className={styles.prop}>
				<div className={styles.prop_title}>Марка:</div>
				<div className={styles.prop_desc}>{brand}</div>
			</div>
			<div className={styles.prop}>
				<div className={styles.prop_title}>Модель:</div>
				<div className={styles.prop_desc}>{model}</div>
			</div>
			<div className={styles.prop}>
				<div className={styles.prop_title}>Год:</div>
				<div className={styles.prop_desc}>{year}</div>
			</div>
			<div className={styles.prop}>
				<div className={styles.prop_title}>Двигатель:</div>
				<div className={styles.prop_desc}>{engine}</div>
			</div>
			<div className={styles.prop}>
				<div className={styles.prop_title}>Трансмиссия:</div>
				<div className={styles.prop_desc}>{transmission}</div>
			</div>
			<div className={styles.prop}>
				<div className={styles.prop_title}>Бензин:</div>
				<div className={styles.prop_desc}>{fuel}</div>
			</div>
			<div className={styles.prop}>
				<div className={styles.prop_title}>Привод:</div>
				<div className={styles.prop_desc}>{drive}</div>
			</div>
		</div>
	)
}

export default AutoCard
