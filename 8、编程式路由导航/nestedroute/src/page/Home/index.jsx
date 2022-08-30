import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 路由组件
import News from './News'
import Message from './Message'
// 一般组件
import MyNavLink from '../../Components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
            <MyNavLink to='/home/message'>Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to='/home/news'/>
        </Switch>
      </div>
    )
  }
}
