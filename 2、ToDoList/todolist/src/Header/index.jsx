import React, { Component } from 'react'
import './index.module.css'
// import header from './index.module.css'

export default class List extends Component {

  handleKeyUo = (event) =>{
    let value = null
    if(event.target.value !== '' && event.key === 'Enter' && event.keyCode === 13){
      value = event.target.value
      this.props.getNewValue(value)
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUo} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
