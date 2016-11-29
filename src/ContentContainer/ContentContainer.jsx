import React from 'react'
import styles from './ContentContainer.scss'

const ContentContainer = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
)

export default ContentContainer
