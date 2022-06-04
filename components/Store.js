import { MdCalendarToday } from 'react-icons/md'
import { motion } from 'framer-motion'
import styles from './store.module.css'
import { IoBagHandle } from 'react-icons/io5'
export default function Store() {
	return (
		<div className='margin'>
			<section className={styles['store']}>
				<div className={styles['spacer']}></div>
				<div className={styles['content']}>
					<h2>Checkout our store</h2>
					<p>Our premium trader-wear store is here to give all traders something they love</p>
					<a href='https://calendly.com/finquest' target='_blank' rel='noreferrer noopener'>
						<div className={styles['coming-soon']}>

							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={styles['store-button']}
							>
								<IoBagHandle className={styles['whatsapp-icon']} />
								<span>Visit Store</span>
							</motion.button>
							<span> COMING SOON</span>
						</div>
					</a>
				</div>


				<img className={styles['image']} src='/images/store.png' alt='' width='440px' height='auto' />
			</section>
		</div>
	)
}
