import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.list_contacts}>
				<div>
					<img src='/images/post_icon.svg' alt='mail' />
					<a href='mailto:ga_auto@mail.ru'>ga_auto@mail.ru</a>
				</div>
				<div>
					<img src='/images/phone_icon.svg' alt='tel' />
					<a href='tel:+79204107734'>+7 (920) 410-77-34</a>
				</div>
			</div>
			<div className={styles.title}>FriendCar 2024</div>
		</footer>
	)
}

export default Footer
