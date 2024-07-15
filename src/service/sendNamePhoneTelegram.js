const SERVER_URL = import.meta.env.VITE_API
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

export async function sendNamePhoneTelegram(
	data,
	setModalActive,
	onClose,
	setModalError
) {
	const formBtn = document.getElementById('button_send')

	const text = `Заявка от ${data.name}. Телефон: ${data.phone}`

	try {
		formBtn.textContent = 'Loading...'
		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				text: text,
			}),
		})

		const success = response.ok
		if (success) {
			setModalActive(true)
			setTimeout(() => {
				onClose()
				setModalActive(false)
			}, 2000)
		} else {
			throw new Error(response.statusText)
		}
	} catch (error) {
		console.log(error)
		if (error) {
			setModalError(true)
			setTimeout(() => {
				setModalError(false)
			}, 2500)
		}
	} finally {
		formBtn.textContent = 'Отправить'
	}
}
