import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
// 路由直接加载
// import Home from './Home'
// import About from './About'

// 获取加载时的显示组件
import Loading from './Loading'

// 路由懒加载
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
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
                {/* 使用 Suspense 防止懒加载时间过长导致页面留白，fallback用于指定加载过程中显示的组件 */}
                <Suspense fallback={<Loading/>}>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
