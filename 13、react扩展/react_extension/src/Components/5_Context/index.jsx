import React, { Component } from 'react'

import './index.css'

// 创建Context容器对象
const MyContext = React.createContext()
// 获取 Provider和Consumer
const { Provider, Consumer } = MyContext
export default class Demo extends Component {
  state = {
    username: 'jerry',
    age: 18
  }

  render() {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h2>A组件</h2>
        <h2>My name is:{username},age:{age}</h2>
        {/* 通过Provider包裹，向B组件及其子组件传递value */}
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}
// B组件可通过A组件props传值直接获取，故此不操作
class B extends Component {
  render() {
    return (
      <div className='child'>
        <h2>B组件</h2>
        <C />
      </div>
    )
  }
}

class C extends Component {
  // 声明context——此方式只能在类式组件中使用
  static contextType = MyContext
  render() {
    // 声明后可直接从实例的context属性获取接受的值
    const { username, age } = this.context
    return (
      <div className='grand'>
        <h2>C组件</h2>
        <h2>My name is:{username},age:{age}</h2>
        <D/>
      </div>
    )
  }
}

function D() {
  return (
    <div className='grand_d'>
      <h2>D组件</h2>
      <h2>My name is:
        {/* 声明context——此方式可在函数和类两种组件中使用，必须使用 Consumer 包裹，里面是个函数，value就是所接收到的context的值*/}
        <Consumer>
          {
            value =>{
              return `${value.username},age:${value.age}`
            }
          }
        </Consumer>
      </h2>
    </div>
  )
}
