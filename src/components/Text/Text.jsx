import React from 'react'
import styles from './Text.module.css'

const Text = () => {
  return (
    <div className={styles.container}>
      <p>
        <span>ПУТЕШЕСТВИЕ</span>
        <br></br>на красную планету
      </p>
      <button>Начать путешествие</button>
    </div>
  )
}

export default Text
