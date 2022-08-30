import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  msgArr = [
    { id: 1, title: '消息1' },
    { id: 2, title: '消息2' },
    { id: 3, title: '消息3' },
  ]

  pushShow = (id,title)=>{
    return ()=>{
      this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
  }

  repalceShow = (id,title)=>{
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }

  forward = ()=>{
    this.props.history.goForward()
  }

  goback = ()=>{
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.msgArr.map((v) => {
              return (
                <li key={v.id}>
                  {/* 传递params参数 */}
                  <Link to={`/home/message/detail/${v.id}/${v.title}`}>{v.title}</Link>

                  {/* search传参 */}
                  {/* <Link to={`/home/message/detail/?id=${v.id}&title=${v.title}`}>{v.title}</Link> */}

                  {/* state传参(刷新能够保留参数) */}
                  {/* <Link to={{pathname:'/home/message/detail',state:{id:v.id,title:v.title}}}>{v.title}</Link> */}

                  <button onClick={this.pushShow(v.id, v.title)}>push</button>&nbsp;
                  <button onClick={() => this.repalceShow(v.id, v.title)}>repalce</button>
                </li>
              )
            })
          }
        </ul>
        {/* 声明传递的params参数 */}
        <Route path='/home/message/detail/:id/:title' component={Detail}></Route>

        {/* search传参无需声明，正常注册 */}
        {/* <Route path='/home/message/detail' component={Detail}></Route> */}

        {/* state传参无需声明，正常注册 */}
        {/* <Route path='/home/message/detail' component={Detail}></Route> */}

        <button onClick={this.forward}>前进</button>
        <button onClick={this.goback}>回退</button>
      </div>
    )
  }
}
