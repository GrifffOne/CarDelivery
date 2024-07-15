import { useEffect, useState } from 'react'

// Функция позволяет закрывать выпадающие Меню при нажатии Вне Области
export const useOnClickOutside = (ref, callback) => {
	const handClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			callback()
		}
	}


	useEffect(() => {
		document.addEventListener('mousedown', handClickOutside)

		return () => {
			document.removeEventListener('mousedown', handClickOutside)
		}
	})
}

export const customUseState = (initialValue) => {
	const [isShow, setIsShow] = useState(initialValue)

	return { isShow, setIsShow }
}
