import { Transition } from 'react-transition-group'
import styles from './SimpleModal.module.scss'
import cn from 'clsx'

import { IoClose } from 'react-icons/io5'
import { useRef } from 'react'
import Field from '../../ui/field/Field'
import { useForm, useFormState } from 'react-hook-form'
import Button from '../../ui/button/Button'
import { Checkbox } from '../../ui/checkbox/Checkbox'
import { useState } from 'react'
import { handlePhoneInput } from '../../../hooks/handlePhoneInput'
import Alert from '../../ui/alert/Alert'
import { sendNamePhoneTelegram } from '../../../service/sendNamePhoneTelegram'



const SimpleModal = ({ isOpen, onClose, children }) => {

	const nodeRef = useRef(null)

	//Проверка Checkbox
	const [isChecked, setIsChecked] = useState(true)

	// Всплытие окна при успешном запросе.
	const [modalActive, setModalActive] = useState(false)

	// Всплытие окна при неуспешном запросе.
	const [modalError, setModalError] = useState(false)

	//Закрытие модального окна по щелчку по затемнениню
	const onWrapperClick = (event) => {
		if (event.target.classList.contains(styles.modal_wrapper)) onClose()
	}

	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: 'onBlur' })

	const onSubmit = (data) => {
		sendNamePhoneTelegram(data, setModalActive, onClose, setModalError)
		reset()
	}

	return (
		<>
			<Transition
				nodeRef={nodeRef}
				in={isOpen}
				timeout={700}
				unmountOnExit={true}
			>
				{(state) => (
					<div ref={nodeRef} className={cn(styles.modal, `modal--${state}`)}>
						<div className={styles.modal_wrapper} onClick={onWrapperClick}>
							{/*  */}
							{modalActive && <Alert text='Запрос успешно отправлен' />}
							{modalError && (
								<Alert
									type='error'
									text='Запрос не отправлен. Попробуйте позже'
								/>
							)}

							<div
								className={cn(styles.modal_content, `modal_content--${state}`)}
							>
								<button
									className={styles.modal_close_button}
									onClick={() => onClose()}
								>
									<IoClose color='white' size={30} />
								</button>

								{children}

								<form onSubmit={handleSubmit(onSubmit)}>
									<label className={styles.label}>
										Ваше имя: <span className={styles.required_star}>*</span>
										<Field
											error={
												errors?.name
													?.message 
											}
											name='name'
											register={register}
											options={{
												required: 'Введите имя',
											}} 
											type='text'
											placeholder=''
										/>
									</label>
									<label className={styles.label}>
										Телефон: <span className={styles.required_star}>*</span>
										<Field
											error={
												errors?.phone
													?.message 
											}
											name='phone'
											register={register}
											options={{
												required: 'Введите номер телефона',
												maxLength: {
													value: 18,
													message: 'Неверный формат',
												},
												pattern: {
													value:
														/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
													message: 'Неверный формат телефона',
												},
											}}
											onInput={handlePhoneInput} 
											type='tel'
											data-tel-input
											placeholder=''
										/>
									</label>

									<Checkbox
										error={errors?.rules?.message}
										name='rules'
										register={register}
										options={{
											required: 'Требуется соглaсие',
										}}
										isChecked={isChecked}
										onChange={setIsChecked}
									>
										Я согласен на обработку персональных данных
									</Checkbox>

									<Button id='button_send' children='Отправить'></Button>
								</form>
							</div>
						</div>
					</div>
				)}
			</Transition>
		</>
	)
}
export default SimpleModal
