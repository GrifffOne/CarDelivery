import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import { items } from './items.data'
import SimpleModal from '../../layout/modal/SimpleModal'
import { customUseState } from '../../../hooks/useClickOutside'
import Slider from '../../ui/slider/Slider'
import { Stages } from './stages-of-work/Stages'
import { Meta } from '../../../utils/meta/Meta'

function Home() {
	const { isShow, setIsShow } = customUseState(false)


	return (
		<Meta description='FriendCar - импорт легковых автомобилей из Европы в Липецк, Воронеж или другую точку России. Подбор и доставка проверенных автомобилей.'>
			<Layout>
				<div className={styles.content}>
					<section className={styles.main}>
						<div className='container'>
							<div className={styles.main_inner}>
								<h1 className={styles.heading}>
									Поставка автомобилей по всей России под заказ
								</h1>

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

								<SimpleModal isOpen={isShow} onClose={() => setIsShow(false)}>
									<h2>Задать вопрос</h2>
									<p>
										Менеджеры компании с радостью ответят на ваши вопросы и
										произведут расчет стоимости услуг, и подготовят
										индивидуальное коммерческое предложение.
									</p>
								</SimpleModal>

								<div className={styles.main_items}>
									{items.map((item, index) => (
										<div className={styles.main_item} key={`_items_${index}`}>
											<div className={styles.main_item_in}>
												<div className={styles.main_item_title}>
													{item.title}
												</div>
												<div className={styles.main_item_description}>
													{item.description}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>

					<section className={styles.auto}>
						<div className='container'>
							<Slider />
						</div>
					</section>

					<section className={styles.stages}>
						<div className='container'>
							<Stages />
						</div>
					</section>
				</div>
			</Layout>
		</Meta>
	)
}

export default Home
