import React from 'react'
import styles from './MenuIcon.scss'

const MenuIcon = ({ showMenu, onClick, handleScroll }) => (
  <div
    tabIndex="0"
    className={`${styles.navicon} ${showMenu ? styles.showMenu : ''} ${handleScroll ? styles.sticky : ''}`}
    onClick={onClick}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default MenuIcon
