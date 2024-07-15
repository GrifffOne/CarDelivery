import { useEffect, useRef, useState } from 'react'
import styles from './Slider.module.scss'
import cn from 'clsx'
import AutoCard from './AutoCard'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { cardAuto } from './slider.data'
import Pagination from './Pagination'
import { useSlideSwiper } from '../../../hooks/useSwipeSlider'

const Slider = () => {
	const { onTouchStart, onTouchMove, onTouchEnd } = useSlideSwiper(
		setNextIndex,
		setPrevIndex
	)

	function setNextIndex() {
		setCurrentIndex((prevState) => prevState + 1)
	}
	function setPrevIndex() {
		setCurrentIndex((prevState) => prevState - 1)
	}

	// add your conditional logic here

	// const [cardAuto, setCardAuto] = useState(cardAutoArray)
	const [currentIndex, setCurrentIndex] = useState(0)

	const nodeRef = useRef(null)


	useEffect(() => {
		const lastIndex = cardAuto.length - 1
		if (currentIndex < 0) {
			setCurrentIndex(lastIndex)
		}
		if (currentIndex > lastIndex) {
			setCurrentIndex(0)
		}
	}, [currentIndex, cardAuto])

	

	return (
		<div className={styles.auto_slider_center}>
			{cardAuto.map((item, indexCard) => {
				const {
					brand,
					model,
					year,
					engine,
					transmission,
					fuel,
					drive,
					photo_1,
					photo_2,
					photo_3,
					photo_4,
				} = item

				let position = styles.nextSlide
				if (indexCard === currentIndex) {
					position = styles.activeSlide
				}


				return (
					<div
						onTouchStart={onTouchStart}
						onTouchMove={onTouchMove}
						onTouchEnd={onTouchEnd}
						className={cn(styles.swiper_wrapper, position)}
						key={`_cardAuto_${indexCard}`}
					>
						<div className={cn(styles.swiper_container)}>
							<div className={styles.photo_gallery}>
								<div className={styles.photo_big}>
									<img src={photo_1} alt='' />
								</div>
								<div className={styles.photo_small_list}>
									<div className={styles.photo_small_item}>
										<img src={photo_2} alt='' />
									</div>
									<div className={styles.photo_small_item}>
										<img src={photo_3} alt='' />
									</div>
									<div className={styles.photo_small_item}>
										<img src={photo_4} alt='' />
									</div>
								</div>
							</div>

							<div className={styles.auto_card}>
								<AutoCard
									brand={brand}
									model={model}
									year={year}
									engine={engine}
									transmission={transmission}
									fuel={fuel}
									drive={drive}
								/>
							</div>
						</div>
					</div>
				)
			})}

			<button
				className={styles.prev}
				onClick={() => setCurrentIndex((prevState) => prevState - 1)}
			>
				<FiChevronLeft />
			</button>

			<button
				className={styles.next}
				onClick={() => setCurrentIndex((prevState) => prevState + 1)}
			>
				<FiChevronRight />
			</button>

			<Pagination
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
			></Pagination>
		</div>
	)
}

export default Slider
