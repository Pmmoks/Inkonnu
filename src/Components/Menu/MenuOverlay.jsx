import React from 'react'
import styles from './MenuOverlay.scss'

const MenuOverlay = ({ open, type }) => {
  const screenWidth = screen.width
  const screenHeight = screen.height
  const overlayInitialDiameter = 42
  const overlayParameter = ((screenWidth < screenHeight) ? screenWidth : screenHeight)
  const transformScale = 5 * overlayParameter / overlayInitialDiameter

  const menuOverlay = {
    WebkitTransform: 'scale(' + transformScale + ')',
    MozTransform: 'scale(' + transformScale + ')',
    MsTransform: 'scale(' + transformScale + ')',
    opacity: 0.9,
  }

  return (
    (type === 'circular') ?
      <div className={styles.circularMenu} style={open ? menuOverlay : {}} />
       :
      <div className={`${styles.menu} ${open ? styles.open : ''}`} />
  )
}

export default MenuOverlay
