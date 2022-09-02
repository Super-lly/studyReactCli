import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Hearder extends Component {
  state={
    count:0
  }
  
  componentDidMount(){
    this.token = PubSub.subscribe('state',(_,data)=>{
      this.setState({count:data})
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h2>求和为：{count}</h2>
      </div>
    )
  }
}
