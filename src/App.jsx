import React from 'react'
import Link from './Components/Link/Link.jsx'
import Menu from './Components/Menu/Menu.jsx'

import SiteRoutes from './Routes/Routes.js'
import styles from './menuBlur.scss'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = { open: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(e) {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div className={`${this.state.open ? styles.open : ''}`}>
        <Menu open={this.state.open} onClick={this.toggleMenu}/>
        <h1>Inkonnu</h1>
        <p>By Jackups</p>
        <Link path={SiteRoutes.landing}>
          Landing Page Link
        </Link>
        <br />
        <Link path={SiteRoutes.sample}>
          Sample Link
        </Link>
        <br />
        <Link path={SiteRoutes.example}>
          Example Link
        </Link>
        <br />
        {this.props.children}
      </div>
    )
  }
}
