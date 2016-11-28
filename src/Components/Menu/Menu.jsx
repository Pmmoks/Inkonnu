import React from 'react'
import MenuIcon from './MenuIcon.jsx'
import MenuOverlay from './MenuOverlay.jsx'

export default class Menu extends React.Component {
  constructor() {
    super()
/*
    this.state = { open: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(e) {
    e.preventDefault()
    this.setState({ open: !this.state.open })
    */
  }
  render() {
    return (
      <div>
        <MenuIcon open={this.props.open} onClick={this.props.onClick} />
        {this.props.children}
        <MenuOverlay open={this.props.open} type={this.props.type} />
      </div>
    )
  }
}
