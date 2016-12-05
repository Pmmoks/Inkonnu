import React from 'react'
import MenuIcon from './MenuIcon.jsx'
import MenuOverlay from './MenuOverlay.jsx'

const Menu = ({ onBlur, showMenu, onClick, children, handleScroll }) => (
  <div tabIndex="0" onBlur={onBlur}>
    <MenuIcon showMenu={showMenu} onClick={onClick} handleScroll={handleScroll} />
    <MenuOverlay showMenu={showMenu} children={children} />
  </div>
)

Menu.propTypes = {
  onBlur: React.PropTypes.func,
  showMenu: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
  handleScroll: React.PropTypes.bool,
}

export default Menu
