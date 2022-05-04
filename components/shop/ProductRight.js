import styles from './product.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'



export default function ProductRight({ imageSrc, title, link, desc }) {
    return (
        <>
            <section className={styles['aboutR']}>
                <div className={styles['dt-sc-hr']}></div>
                <div className={styles['contentR']}>
                    <div className={styles['heading-wrapper']}>
                    </div>
                    <Link href={`${link}`}>
                        <a aria-label={title} className={styles['action-link']} rel='noreferrer noopener'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles['action-button']}
                            >
                                Add to Cart
                            </motion.button>
                        </a></Link>
                    <h3>{title}</h3>
                    <p>
                        {desc} </p>
                </div>
                <div>
                    <img className={styles['image']} src={imageSrc} alt={title} width='110%' height='auto' />
                </div>

            </section>

        </>
    )
}