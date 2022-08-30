import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      // 标签体内容可以通过this.props.children获取
      <NavLink activeClassName="istrue" className="list-group-item" {...this.props} />
    )
  }
}
