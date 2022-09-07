import React,{Component} from "react";

export default class Demo extends Component{
  state={
    count:0
  }
  addThree = ()=>{
    // const {count} = this.state
    // // 1、对象式 setState 接受两个参数——修改状态对象和回调函数，在回调函数中可以获取完成更新的状态
    // this.setState({count:count+3},()=>{
    //   console.log(this.state.count);
    // })

    // 2、函数式 setState 第一个残数为一个返回状态对象的函数，接受两个参数——本组件的state和接收到的props；也可以接受一个回调函数，同对象式
    this.setState((state,props)=>{
      return {count:state.count+3}
    })
  }
  render(){
    return (
      <div>
        <h2>当前数值为：{this.state.count}</h2>
        <button onClick={this.addThree}>经验+3</button>
      </div>
    )
  }
}