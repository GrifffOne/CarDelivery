import Button from '../../ui/button/Button'
import { contacts, menu } from './menu.data'
import styles from './Hamburger.module.scss'
import { IoClose } from 'react-icons/io5'

import cn from 'clsx'
import { Link } from 'react-router-dom'
import { useOnClickOutside } from '../../../hooks/useClickOutside'
import { useRef, useState } from 'react'
import { useScrollController } from '../../../hooks/useScrollController'
import SimpleModal from '../modal/SimpleModal'


const MenuAdaptive = ({ header, isShow, setIsShow }) => {
	const ref = useRef(null)

	const [isShowModal, setIsShowModal] = useState(false)

	useOnClickOutside(ref, () => {
		if (isShowModal) return
		if (isShow) setTimeout(() => setIsShow(false), 50)
	})

	useScrollController({ isShow })

	return (
		<nav
			className={cn(styles.menu_adaptive, 'fix_block', {
				[styles.active]: isShow,
			})}
		>
			<div className={styles.blur} />

			<SimpleModal isOpen={isShowModal} onClose={() => setIsShowModal(false)}>
				<h2>Задать вопрос</h2>
				<p>
					Менеджеры компании с радостью ответят на ваши вопросы и произведут
					расчет стоимости услуг, и подготовят индивидуальное коммерческое
					предложение.
				</p>
			</SimpleModal>

			<div
				className={cn(styles.menu_adaptive_content, {
					[styles.active]: isShow,
				})}
				ref={ref}
			>
				<button
					aria-label='Close menu'
					onClick={() => {
						setIsShow(false)
					}}
				>
					<IoClose color='black' />
				</button>

				<div className={styles.menu_adaptive_header}>{header}</div>

				<ul>
					{menu.map((item, index) => (
						<li key={`_menu_${index}`}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
					<li>
						<Button
							children='Оставить запрос'
							clickHandler={() => setIsShowModal(true)}
						/>
					</li>
				</ul>

				<div className={styles.menu_adaptive_contacts}>
					<ul>
						{contacts.map((item, index) => (
							<li key={`_contacts_${index}`}>
								<img src={item.icon} alt='' />
								<Link to={item.link} target={item.target}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default MenuAdaptive
