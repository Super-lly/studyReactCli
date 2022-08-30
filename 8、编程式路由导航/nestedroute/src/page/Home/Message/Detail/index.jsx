import React, { Component } from 'react'
// import qs from 'qs'

export default class Detail extends Component {
  detailArr = [
    { id: 1, content: '这是第一条消息' },
    { id: 2, content: '这是第二条消息' },
    { id: 3, content: '这是第三条消息' },
  ]
  render() {
    // 1、params
    // 使用 this.props.match.params 获取路由传递的params
    const {id,title} = this.props.match.params

    // 2、search
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    // 3、state
    // const {id,title} = this.props.location.state

    const detailObj = this.detailArr.find(v=>{
        return v.id === Number(id)
      })
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{detailObj.content}</li>
        </ul>
      </div>
    )
  }
}
