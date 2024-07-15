import styles from './Stages.module.scss'
import { stages } from './stages.data'

export const Stages = () => {
	return (
		<div>
			<div className={styles.title}>Этапы работы</div>
			<div className={styles.stage_items}>
				{stages.map((item, index) => (
					<div className={styles.item_in} key={`_items_${index}`}>
						<div className={styles.item_title}>{item.title}</div>
						<div className={styles.item_description}>
							{item.description}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
