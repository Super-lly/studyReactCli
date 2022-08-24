import React, { Component } from 'react'
import './index.module.css'

export default class Footer extends Component {
  removeDIds = () => {
    const { todos } = this.props
    let checkedArr = todos.filter(item => {
      return item.todoStatus === true
    })
    checkedArr.map(item => {
      let index = todos.indexOf(item)
      if (index !== -1) {
        todos.splice(index, 1)
      }
      return todos
    })
    this.props.removeChecked(todos)
  }
  changeAll = (event) =>{
    this.props.checkedAll(event.target.checked)
  }
  render() {
    const { todos } = this.props
    const didLenth = todos.reduce((pre,current)=>{return pre + (current.todoStatus ? 1 : 0)},0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.changeAll} checked={didLenth === todos.length && todos.length !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{todos.filter(item => {
            return item.todoStatus === true
          }).length}</span> / 全部{todos.length || 0}
        </span>
        <button className="btn btn-danger" onClick={this.removeDIds}>清除已完成任务</button>
      </div>
    )
  }
}
