import React, { Component } from 'react'

export default class Content extends Component {

  increment = () => {
    const { value } = this.getNumber
    this.props.increment(value * 1)
  }

  decrement = () => {
    const { value } = this.getNumber
    this.props.decrement(value * 1)
  }

  incrementOdd = () => {
    const { value } = this.getNumber
    if (this.props.count % 2 !== 0 || this.props.count === 0) {
      this.props.increment(value * 1)
    } else {
      alert('当前和不为奇数')
    }
  }

  incrementAsync = () => {
    const { value } = this.getNumber
    this.props.asyncincrement(value * 1, 1000)
  }

  render() {
    return (
      <div>
        <h2>求和为：{this.props.count}</h2>
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
