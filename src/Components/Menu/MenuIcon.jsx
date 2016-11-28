import React from 'react'
import styles from './MenuIcon.scss'

const MenuIcon = ({ open, onClick }) => (
  <div className={`${styles.navicon} ${open ? styles.open : ''}`} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default MenuIcon
