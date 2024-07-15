import { useEffect } from 'react'

export const useScrollController = ({ isShow }) => {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
	let fixBlock = document.querySelectorAll('.fix_block')

	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden'
			document.body.style.paddingRight = paddingOffset
			fixBlock.forEach((element) => {
				element.style.paddingRight = paddingOffset
			})
		}

		return () => {
			document.body.style.overflow = 'unset'
			document.body.style.paddingRight = '0px'
			fixBlock.forEach((element) => {
				element.style.paddingRight = '0'
			})
		}
	}, [isShow])
}


