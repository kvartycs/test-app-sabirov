import React from 'react'
import styles from './Blocks.module.css'

const Blocks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        мы <span>1</span> на рынке
      </div>

      <div className={styles.block}>
        гарантируем <span>50%</span> безопасность
      </div>
      <div className={styles.block}>
        календарик за{' '}
        <span>
          2001 <p>г.</p>
        </span>{' '}
        в подарок
      </div>
      <div className={styles.block}>
        путешествие <span>597</span> дней
      </div>
    </div>
  )
}

export default Blocks
