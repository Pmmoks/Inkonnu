import React from 'react'
import styles from './MenuOverlay.scss'

const MenuOverlay = ({ showMenu, children }) => (
  <ul tabIndex="0" className={`${styles.menu} ${showMenu ? styles.showMenu : ''}`}>
    {children}
  </ul>
)

export default MenuOverlay
