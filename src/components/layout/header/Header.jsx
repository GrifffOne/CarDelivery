import { Link, useNavigate } from 'react-router-dom'

import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

import { menu } from '../hamburger/menu.data'
import Button from '../../ui/button/Button'

import cn from 'clsx'
import SimpleModal from '../modal/SimpleModal'
import { customUseState } from '../../../hooks/useClickOutside'

const Header = () => {
	const navigate = useNavigate()

	const { isShow, setIsShow } = customUseState(false)

	return (
		<header className={cn(styles.header, 'fix_block')}>
			<>
				{
					<button
						aria-label='Go to profile'
						onClick={() => {
							navigate('/')
						}}
					>
						<img
							src='images/favicon_1.png'
							alt='FriendCar'
							fill='#fff'
							fontSize={30}
							width={90}
						/>
						<div>FriendCar</div>
					</button>
				}

				<ul>
					{menu.map((item, index) => (
						<li key={`_menu_${index}`}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>

				<div className={styles.social}>
					<a
						className={styles.telegram}
						href='https://t.me/+79204157734'
						title='Telegram'
						target='_blank'
						rel='noopener'
					>
						<img src='\images\header\telegram_icon.svg' alt='Telegram' />
					</a>
					<a className={styles.phones} href='tel:+79204157734'>
						+7 (920) 410-77-34
					</a>
					<a className={styles.phones_min} href='tel:+79204157734'>
						<img src='\images\header\phone-header.svg' alt='phone' />
					</a>
					<div className={styles.button_send}>
						<Button
							children='Заказать звонок'
							clickHandler={() => {
								setIsShow(true)
							}}
						/>
					</div>

					<SimpleModal isOpen={isShow} onClose={() => setIsShow(false)}>
						<h2>Задать вопрос</h2>
						<p>
							Менеджеры компании с радостью ответят на ваши вопросы и произведут
							расчет стоимости услуг, и подготовят индивидуальное коммерческое
							предложение.
						</p>
					</SimpleModal>

					<div className={styles.hamburger}>
						<Hamburger />
					</div>
				</div>
			</>
		</header>
	)
}

export default Header
