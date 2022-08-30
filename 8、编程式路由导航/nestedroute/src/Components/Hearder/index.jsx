import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Hearder extends Component {
  
  forward = ()=>{
    this.props.history.goForward()
  }

  goback = ()=>{
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <div className="page-header"><h2>React Router Demo</h2></div>
        
        <button onClick={this.forward}>前进</button>
        <button onClick={this.goback}>回退</button>
      </div>
    )
  }
}

// withRouter 用于加工一般组件，使一般组件具备路由组件独有的API
// withRouter 返回值是一个新的组件
export default withRouter(Hearder)
