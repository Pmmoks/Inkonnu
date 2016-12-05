import React from 'react'

import styles from './StickyHeader.scss'

const StickyHeader = ({ handleScroll, children }) => (
  <header className={`${styles.header} ${handleScroll ? styles.sticky : ''}`}>
    {children}
  </header>
)

StickyHeader.propTypes = {
  handleScroll: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
}

export default StickyHeader
