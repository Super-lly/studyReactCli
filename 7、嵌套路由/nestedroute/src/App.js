import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom'

import About from './page/About'
import Home from './page/Home'
import MyNavLink from "./Components/MyNavLink";
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to='/home'>Home</MyNavLink>
              <MyNavLink to='/about'>About</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  {/* 重定向 当路由没有匹配项时默认处于哪一路由 */}
                  <Redirect to='/home' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
