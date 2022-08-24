import React, { Component } from 'react'
import './index.module.css'

export default class Main extends Component {
  state = {mouse:false}
  handleMouse = (flag)=>{
    return () =>{
      this.setState({mouse:flag})
    }
  }
  remove = (item)=>{
    return()=>{
      this.props.getRemove(item)
    }
  }
  changeItem = (item)=>{
    return(event)=>{
      let todoStatus = event.target.checked
      this.props.changetodoStatus(item,todoStatus)
    }
  }
  render() {
    const { todos } = this.props
    const {mouse} = this.state
    return (
      <ul className="todo-main">
        {todos.map(item => {
          return <li style={{backgroundColor :mouse ? '#ddd' : 'white'}} key={item.key} 
          onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
              <input onChange={this.changeItem(item)} type="checkbox" checked={item.todoStatus} />
              <span>{item.value}</span>
            </label>
            <button onClick={this.remove(item)} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
          </li>
        })}
      </ul>
    )
  }
}
