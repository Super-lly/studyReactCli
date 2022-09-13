import React,{Component} from "react";

import './index.css'

export default class Demo extends Component{
  render(){
    return(
      <div className="parent">
        <h2>parent</h2>
        {/* 给A组件传递一个函数返回B组件并给B组件传递参数name */}
        <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }

}

class A extends Component{
  state = {
    name:'Jerry'
  }
  render(){
    const {name} = this.state
    return(
      <div className="child">
        <h2>A组件</h2>
        {/* 渲染B组件 */}
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component{
  render(){
    return(
      <div className="grand">
        <h2>B组件,名字：{this.props.name}</h2>
      </div>
    )
  }
}