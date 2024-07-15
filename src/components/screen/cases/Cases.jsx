import { Meta } from '../../../utils/meta/Meta'
import Layout from '../../layout/Layout'
import Slider from '../../ui/slider/Slider'
import styles from './Cases.module.scss'

const Cases = () => {
	return (
		<Meta description='FriendCar - импорт легковых автомобилей из Европы в Липецк, Воронеж или другую точку России. Подбор и доставка проверенных автомобилей.'>
			<Layout bgImage='/public/images/home-bg-2.jpg'>
				<section className={styles.auto}>
					<div className='container'>
						<Slider />
					</div>
				</section>
			</Layout>
		</Meta>
	)
}

export default Cases
