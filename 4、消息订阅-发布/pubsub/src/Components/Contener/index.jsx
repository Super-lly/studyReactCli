import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class Contener extends Component {

  state = {
    isFirst:true,
    isLoading:false,
    items:[],
    err:''
  }

  componentDidMount(){
    this.token = Pubsub.subscribe('state',(_,data)=>{
      this.setState(data)
    })
  }
  componentWillUnmount(){
    Pubsub.unsubscribe(this.token)
  }

  render() {
    const { isFirst, isLoading, items, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>请输入关键字后点击搜索</h2> : 
          isLoading ? <h2>Loading......</h2> : 
          err ? <h2>{err}</h2> :
          items.map(v => {
            return <div className="card" key={v.id}>
              <a href={v.html_url} target="_blank" rel='noreferrer'>
                <img src={v.avatar_url} alt='head_portrait' style={{ width: '100px' }} />
              </a>
              <p className="card-text">{v.login}</p>
            </div>
          })
        }
      </div>
    )
  }
}
