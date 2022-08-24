import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import './App.css'

export default class App extends Component {
  state = {todos:[
    {key:'1',value:'第一',todoStatus:true},
    {key:'2',value:'第二',todoStatus:true}
  ]}
  getNewValue = (value) =>{
    let {todos} = this.state
    let key = String(todos.length + 1)
    let todoStatus = false
    todos.unshift({key,value,todoStatus})
    this.setState({todos})
  }
  getRemove = (item)=>{
    let {todos} = this.state
    let index = todos.indexOf(item)
    if(index !== -1){
      todos.splice(index,1)
      this.setState({todos})
    }
  }
  changetodoStatus=(item,flag)=>{
    let {todos} = this.state
    let index = todos.indexOf(item)
    if(index !== -1){
      todos[index].todoStatus = flag
      this.setState({todos})
    }
  }
  removeChecked = (arr)=>{
    this.setState({todos:arr})
  }
  checkedAll = (status) =>{
    const {todos} = this.state
    const newArr = todos.map(item=>{
      return {...item,todoStatus:status}
    })
    this.setState({todos:newArr})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getNewValue={this.getNewValue}></Header>
          <Main todos={todos} getRemove={this.getRemove} changetodoStatus={this.changetodoStatus}></Main>
          <Footer todos={todos} removeChecked={this.removeChecked} checkedAll={this.checkedAll}></Footer>
        </div>
      </div>
    )
  }
}