import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  msgArr = [
    { id: 1, title: '消息1' },
    { id: 2, title: '消息2' },
    { id: 3, title: '消息3' },
  ]
  render() {
    return (
      <div>
        <ul>
          {
            this.msgArr.map((v) => {
              return (
                <li key={v.id}>
                  {/* 传递params参数 */}
                  {/* <Link to={`/home/message/detail/${v.id}/${v.title}`}>{v.title}</Link> */}

                  {/* search传参 */}
                  {/* <Link to={`/home/message/detail/?id=${v.id}&title=${v.title}`}>{v.title}</Link> */}

                  {/* state传参(刷新能够保留参数) */}
                  <Link to={{pathname:'/home/message/detail',state:{id:v.id,title:v.title}}}>{v.title}</Link>
                </li>
              )
            })
          }
        </ul>
        {/* 声明传递的params参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}

        {/* search传参无需声明，正常注册 */}
        {/* <Route path='/home/message/detail' component={Detail}></Route> */}

        {/* state传参无需声明，正常注册 */}
        <Route path='/home/message/detail' component={Detail}></Route>
      </div>
    )
  }
}
