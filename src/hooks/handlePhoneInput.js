const PATTERN = /\D/g

const getInputNumbersValue = (value) => {
	return value.replace(PATTERN, '')
}

export const handlePhoneInput = (event) => {
	const input = event.target
	let inputNumberValue = getInputNumbersValue(input.value)

	let formattedInputValue = ''

	const selectionStart = input.selectionStart

	if (input.value.length !== selectionStart) {
		return
	}

	if (!inputNumberValue) {
		return (input.value = '')
	}

	if (['7', '8', '9'].indexOf(inputNumberValue[0]) > -1) {
		if (inputNumberValue[0] === '9') {
			inputNumberValue = '7' + inputNumberValue
		}
		const firstSymbol = inputNumberValue[0] === '8' ? '8' : '+7'

		formattedInputValue = firstSymbol + ''

		if (inputNumberValue.length > 1) {
			formattedInputValue += '(' + inputNumberValue.substring(1, 4)
		}

		if (inputNumberValue.length >= 5) {
			formattedInputValue += ') ' + inputNumberValue.substring(4, 7)
		}

		if (inputNumberValue.length >= 8) {
			formattedInputValue += '-' + inputNumberValue.substring(7, 9)
		}

		if (inputNumberValue.length >= 10) {
			formattedInputValue += '-' + inputNumberValue.substring(9, 11)
		}
	} else {
		formattedInputValue = '+' + inputNumberValue.substring(0, 16)
	}

	input.value = formattedInputValue
}

const normalizePhoneNumber = (phoneNumber) => {
	const PATTERN = /\D/g

	let formattedInputValue = ''

	const inputNumbersValue = phoneNumber.replace(PATTERN, '')

	const firstSymbol = inputNumbersValue[0]

	if (firstSymbol === '8') {
		formattedInputValue = inputNumbersValue
	}

	if (firstSymbol === '7') {
		formattedInputValue = '+' + inputNumbersValue
	}

	return formattedInputValue
}

const handlePhoneKeyDown = (event) => {
	const input = event.target

	if (
		event.key === 'Backspace' &&
		getInputNumbersValue(input.value).length === 1
	) {
		input.value = ''
	}
	return input
}

const handlePhonePaste = (event) => {
	const pasted = event.clipboardData ?? window['clipboardData']

	const input = event.target

	const inputNumbersValue = getInputNumbersValue(input.value)

	if (pasted) {
		const pastedText = pasted.getData('Text')

		if (PATTERN.test(pastedText)) {
			input.value = inputNumbersValue
		}
	}
}
