import React from 'react'
import { MdModeEdit, MdImportContacts, MdInfo } from 'react-icons/lib/md'
// import Link from './Components/Link/Link.jsx'
import Menu from './Components/Menu/Menu.jsx'
import MenuItem from './Components/Menu/MenuItem.jsx'
import StickyHeader from './Components/StickyHeader/StickyHeader.jsx'

import SiteRoutes from './Routes/Routes.js'
import styles from '../styles/common.scss'

const stickyScrollLimit = 25
export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenu: false,
      sticky: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenuOnBlur = this.closeMenuOnBlur.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if (window.scrollY > stickyScrollLimit) {
      this.setState({ sticky: true })
    } else {
      this.setState({ sticky: false })
    }
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  }

  closeMenuOnBlur() {
    if (!this.state.showMenu) {
      return
    }
  //  this.setState({ showMenu: false })
  }

  render() {
    return (
      <div>
        <Menu showMenu={this.state.showMenu} onClick={this.toggleMenu} handleScroll={this.state.sticky}>
          <MenuItem path={SiteRoutes.write} onClick={this.toggleMenu}>
            <MdModeEdit className={styles.menuIcon} />SCRIBBLE
          </MenuItem>
          <MenuItem path={SiteRoutes.read} onClick={this.toggleMenu}>
            <MdImportContacts className={styles.menuIcon} />STORY BOARD
          </MenuItem>
          <MenuItem path={SiteRoutes.about} onClick={this.toggleMenu}>
            <MdInfo className={styles.menuIcon} />ABOUT
          </MenuItem>
        </Menu>
        <div className={`${this.state.showMenu ? styles.showMenu : ''}`}>
          <StickyHeader handleScroll={this.state.sticky}><h1>Inkonnu</h1></StickyHeader>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
}
