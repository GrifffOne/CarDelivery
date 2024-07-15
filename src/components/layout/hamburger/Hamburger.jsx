import { CgMenuRight } from 'react-icons/cg'

import { customUseState } from '../../../hooks/useClickOutside'
import styles from './Hamburger.module.scss'

import MenuAdaptive from './MenuAdaptive'

const Hamburger = () => {
	const { isShow, setIsShow } = customUseState(false)

	return (
		<div className={styles.wrapper}>
			<button
				aria-label='Open menu' 
				onClick={() => setIsShow(true)}
			>
				{
					<CgMenuRight color='white' />
		
				}
			</button>
			<MenuAdaptive
				isShow={isShow}
				setIsShow={setIsShow}
				header='Поставка Авто'
			/>
		</div>
	)
}

export default Hamburger
