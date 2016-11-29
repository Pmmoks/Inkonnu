import React from 'react'

import styles from './StickyHeader.scss'

const StickyHeader = ({ handleScroll, children }) => (
  <header className={`${styles.header} ${handleScroll ? styles.sticky : ''}`}>
    {children}
  </header>
)

export default StickyHeader
