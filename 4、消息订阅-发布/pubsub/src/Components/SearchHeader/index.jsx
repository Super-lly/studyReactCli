import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class SearchHeader extends Component {

  search = () =>{
    const {input} = this
    PubSub.publish('state',{isFirst:false,isLoading:true})
    let value = input.value
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      res=>{
        PubSub.publish('state',{isFirst:false,isLoading:false,err:''})
        if(res.status === 200){
          let items = res.data.items
          if(Array.isArray(items)){
            PubSub.publish('state',{isFirst:false,isLoading:false,items})
          }
        }
      },
      error=>{
        PubSub.publish('state',{isFirst:false,isLoading:false,err:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.input = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
