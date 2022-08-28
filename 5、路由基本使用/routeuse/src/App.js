import React, { Component } from "react";
import {NavLink,Route} from 'react-router-dom'

import About from './Components/About'
import Home from './Components/Home'
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
              {/* NavLink 用于添加点击连接时的展示效果 使用activeClassName为连接添加自定义效果 默认名为active */}
              <NavLink activeClassName="istrue" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="istrue" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
