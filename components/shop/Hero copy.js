import styles from './hero.module.css'

export default function Hero() {
	return (
		<div className='margin relative'>
			<section className={styles['rocket']}>
				<div className={styles['heading-wrapper']}>
					<h2>Goodies for Traders</h2>
					<br /><br />
				</div>
				<div className={styles['content']}>

					<div className={styles['item']}>
						<img alt='Veterans' src='/images/shop/shop-hero-image.svg' width='220px' height='auto' />

					</div>
				</div>
				<div className={styles['decorations']}>
					<img className={styles['blue-red']} src='/icons/blue-red.svg' alt='' />
					<img className={styles['violet-yellow']} src='/icons/violet-yellow.svg' alt='' />
					<div className={styles['green']}></div>
					<div className={styles['violet']}></div>
					<img className={styles['twinkle-1']} src='/icons/twinkle-2.svg' alt='' />
					<img className={styles['twinkle-2']} src='/icons/twinkle-2.svg' alt='' />
					<img className={styles['rupee']} src='/icons/rupee.svg' alt='' />
					<img className={styles['safe']} src='/icons/safe.svg' alt='' />
					<img className={styles['bank']} src='/icons/bank.svg' alt='' />
					<img className={styles['piggy-bank']} src='/icons/piggy-bank.svg' alt='' />
					<img className={styles['trend-up']} src='/icons/trend-up.svg' alt='' />
					<img className={styles['rocket']} src='/icons/rocket.svg' alt='' />
					<img className={styles['wallet']} src='/icons/wallet.svg' alt='' />
					<img className={styles['coins']} src='/icons/coins.svg' alt='' />
					<img className={styles['curly-1']} src='/icons/curly-arrow.svg' alt='' />
					<img className={styles['curly-2']} src='/icons/curly-arrow.svg' alt='' />
				</div>
			</section>
		</div>
	)
}
