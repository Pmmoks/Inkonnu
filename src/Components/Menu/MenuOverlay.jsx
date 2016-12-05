import React from 'react'
import styles from './MenuOverlay.scss'

const MenuOverlay = ({ showMenu, children }) => (
  <ul tabIndex="0" className={`${styles.menu} ${showMenu ? styles.showMenu : ''}`}>
    {children}
  </ul>
)

MenuOverlay.propTypes = {
  showMenu: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
}

export default MenuOverlay
