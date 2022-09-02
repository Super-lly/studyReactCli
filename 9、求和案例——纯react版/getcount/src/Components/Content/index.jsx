import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class Content extends Component {
  state = {
    count: 0
  }

  increment = () => {
    const { value } = this.getNumber
    const { count } = this.state
    let newCount = Number(count) + Number(value)
    this.setState({ count: newCount })
    Pubsub.publish('state', newCount)
  }

  decrement = () => {
    const { value } = this.getNumber
    const { count } = this.state
    let newCount = Number(count) - Number(value)
    this.setState({ count: newCount })
    Pubsub.publish('state', newCount)
  }

  incrementOdd = () => {
    const { value } = this.getNumber
    const { count } = this.state
    if (count % 2 !== 0 || count === 0) {
      let newCount = Number(count) + Number(value)
      this.setState({ count: newCount })
      Pubsub.publish('state', newCount)
    } else {
      alert('当前和不为奇数')
      return
    }
  }

  incrementAsync = () => {
    const { value } = this.getNumber
    const { count } = this.state
    setTimeout(() => {
      let newCount = Number(count) + Number(value)
      this.setState({ count: newCount })
      Pubsub.publish('state', newCount)
    }, 1000)
  }
  render() {
    return (
      <div>
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
