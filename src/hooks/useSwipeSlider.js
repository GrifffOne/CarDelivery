import { useRef, useState } from 'react'

export const useSlideSwiper = (setNextIndex, setPrevIndex) => {
	const [touchStartX, setTouchStartX] = useState(null)
	const [touchEndX, setTouchEndX] = useState(null)

	const [touchStartY, setTouchStartY] = useState(null)
	const [touchEndY, setTouchEndY] = useState(null)

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistance = 50

	const onTouchStart = (e) => {
		setTouchEndX(null) // otherwise the swipe is fired even with usual touch events
		setTouchStartX(e.targetTouches[0].clientX)

		setTouchEndY(null)
		setTouchStartY(e.targetTouches[0].clientY)
	}

	const onTouchMove = (e) => {
		setTouchEndX(e.targetTouches[0].clientX)
		setTouchEndY(e.targetTouches[0].clientY)
	}

	const onTouchEnd = () => {
		if (!touchStartX || !touchEndX) return

		const distanceX = touchStartX - touchEndX
		const distanceY = touchStartY - touchEndY
		const isLeftSwipe = distanceX > minSwipeDistance
		const isRightSwipe = distanceX < -minSwipeDistance

		if (isRightSwipe && Math.abs(distanceX) > Math.abs(distanceY)) {
			setPrevIndex()
		}
		if (isLeftSwipe && Math.abs(distanceX) > Math.abs(distanceY)) {
			setNextIndex()
		}
	}

	return { onTouchStart, onTouchMove, onTouchEnd }
}

//Второй способ свайпа
export const useSlideSwiperTwo = (setNextIndex, setPrevIndex) => {
	const touchStart = useRef(null)
	const touchEnd = useRef(null)

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistance = 50

	const onTouchStart = (e) => {
		touchEnd.current = null
		touchStart.current = e.targetTouches[0].clientX
	}

	const onTouchMove = (e) => {
		touchEnd.current = e.targetTouches[0].clientX
	}

	const onTouchEnd = () => {
		if (!touchStart.current || !touchEnd.current) return
		const distance = touchStart.current - touchEnd.current
		const isLeftSwipe = distance > minSwipeDistance
		const isRightSwipe = distance < -minSwipeDistance
		if (isLeftSwipe || isRightSwipe) {
			isLeftSwipe ? setNextIndex() : setPrevIndex()
		}
	}

	return { onTouchStart, onTouchMove, onTouchEnd }
}

//Третий способ свайпа
export const useSlideSwiperThree = (setNextIndex, setPrevIndex) => {
	const [touchStart, setTouchStart] = useState(null)
	const [touchEnd, setTouchEnd] = useState(null)

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistance = 50

	const onTouchStart = (e) => {
		setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
		setTouchStart(e.targetTouches[0].clientX)
	}

	const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		const distance = touchStart - touchEnd
		const isLeftSwipe = distance > minSwipeDistance
		const isRightSwipe = distance < -minSwipeDistance
		if (isLeftSwipe || isRightSwipe) {
			isLeftSwipe ? setNextIndex() : setPrevIndex()
		}
	}

	return { onTouchStart, onTouchMove, onTouchEnd }
}
