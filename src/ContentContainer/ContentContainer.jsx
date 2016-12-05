import React from 'react'
import styles from './ContentContainer.scss'

const ContentContainer = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
)

ContentContainer.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
}

export default ContentContainer
