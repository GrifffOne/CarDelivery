import { customUseState } from '../../../hooks/useClickOutside'
import { Meta } from '../../../utils/meta/Meta'
import Layout from '../../layout/Layout'
import SimpleModal from '../../layout/modal/SimpleModal'
import Button from '../../ui/button/Button'
import styles from './About.module.scss'

const About = () => {
	const { isShow, setIsShow } = customUseState(false)

	return (
		<Meta description='FriendCar - импорт легковых автомобилей из Европы в Липецк, Воронеж или другую точку России. Подбор и доставка проверенных автомобилей.'>
			<Layout bgImage='/public/images/home-bg-2.jpg'>
				<section className={styles.about}>
					<div className='container'>
						<SimpleModal isOpen={isShow} onClose={() => setIsShow(false)}>
							<h2>Задать вопрос</h2>
							<p>
								Менеджеры компании с радостью ответят на ваши вопросы и
								произведут расчет стоимости услуг, и подготовят индивидуальное
								коммерческое предложение.
							</p>
						</SimpleModal>

						<div className={styles.wrapper_center}>
							<div className={styles.inner_content}>
								<h1 className={styles.title}>
									Надежный поставщик автомобилей из Европы и Азии
								</h1>
								<div className={styles.description}>
									Наша компания специализируется на поставке автомобилей
									среднего и премиум-класса. Работаем под заказ.
								</div>
							</div>

							<div className={styles.inner_content}>
								<h1 className={styles.title}>Опыт работы по всей России</h1>
								<div className={styles.description}>
									Мы находим эксклюзивные комплектации по запросу клиента и
									просто автомобили. При этом не завышаем цену и не придумываем
									непонятных схем.
								</div>
							</div>

							<div className={styles.inner_content}>
								<h1 className={styles.title}>Фиксируем цену</h1>
								<div className={styles.description}>
									После подписание договора цена не изменится. Доставка до 30
									дней. На основных этапах сделки и доставки автомобиля
									производим фото-видеофиксацию
								</div>
							</div>

							<div className={styles.inner_content}>
								<h1 className={styles.title}>
									Доставляем авто в надлежащем виде
								</h1>
								<div className={styles.description}>
									Наши сотрудники доставляют автомобили в любой город России в
									чистом виде, полностью заправленными или заряженными.
								</div>
							</div>

							<div className={styles.button}>
								<Button
									size='1000px'
									clickHandler={() => {
										setIsShow(true)
									}}
								>
									Узнать подробности
								</Button>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</Meta>
	)
}

export default About
