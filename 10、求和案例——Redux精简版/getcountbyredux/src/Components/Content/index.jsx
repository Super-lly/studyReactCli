import React, { Component } from 'react'
import store from '../../redux/store'

export default class Content extends Component {

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }

  increment = () => {
    const { value } = this.getNumber
    store.dispatch({type:'increment',data:Number(value)})
  }

  decrement = () => {
    const { value } = this.getNumber
    store.dispatch({type:'decrement',data:Number(value)})
  }

  incrementOdd = () => {
    const { value } = this.getNumber
    const  count  = store.getState()
    if (count % 2 !== 0 || count === 0) {
      store.dispatch({type:'increment',data:Number(value)})
    } else {
      alert('当前和不为奇数')
      return
    }
  }

  incrementAsync = () => {
    const { value } = this.getNumber
    setTimeout(() => {
      store.dispatch({type:'increment',data:Number(value)})
    }, 1000)
  }
  render() {
    return (
      <div>
        <h2>求和为：{store.getState()}</h2>
        <select ref={c => this.getNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
