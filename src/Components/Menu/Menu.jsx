import React from 'react'
import MenuIcon from './MenuIcon.jsx'
import MenuOverlay from './MenuOverlay.jsx'

const Menu = ({ onBlur, showMenu, onClick, children, handleScroll }) => (
  <div tabIndex="0" onBlur={onBlur}>
    <MenuIcon showMenu={showMenu} onClick={onClick} handleScroll={handleScroll} />
    <MenuOverlay showMenu={showMenu} children={children} />
  </div>
)

export default Menu
