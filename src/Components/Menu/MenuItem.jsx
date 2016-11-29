import React from 'react'
import Link from '../Link/Link.jsx'

const MenuItem = ({ className, href, path, children, onClick, target }) => {
  let menuListItem = null

  if (href) {
    menuListItem = (
      <li>
        <Link
          className={className}
          href={href}
          children={children}
          role="menuitem"
          onClick={onClick}
          target={target}
        />
      </li>
    )
  } else if (path) {
    menuListItem = (
      <li>
        <Link className={className} path={path} children={children} onClick={onClick} role="menuitem" />
      </li>
    )
  }

  return menuListItem
}

export default MenuItem
