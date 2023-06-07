import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="./img/logo.png" alt="logo" />
      </div>
      <nav className={styles.menu}>
        <ul>
          <li className={styles.menu_item}>Главная</li>
          <li className={styles.menu_item}>Технология</li>
          <li className={styles.menu_item}>График полетов</li>
          <li className={styles.menu_item}>Гарантии</li>
          <li className={styles.menu_item}>О компании</li>
          <li className={styles.menu_item}>Контакты</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
