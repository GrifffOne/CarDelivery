import styles from './Slider.module.scss'
import { cardAuto } from './slider.data'
import cn from 'clsx'

const Pagination = ({ currentIndex, setCurrentIndex }) => {
	const paginationCircle = []

	function createPaginationCircle() {
		const div = document.createElement('div')
		paginationCircle.push(div)
	}

	cardAuto.forEach(createPaginationCircle)


	return (
		<div className={styles.swiper_navigate}>
			{paginationCircle.map((item = '', index) => {
				let position = styles.nextSlide
				if (index === currentIndex) {
					position = styles.active_circle
				}
				return (
					<div
						onClick={() => setCurrentIndex(index)}
						className={cn(styles.pagination_circle, position)}
						key={`_paginationCircle_${index}`}
					></div>
				)
			})}
		</div>
	)
}
export default Pagination
