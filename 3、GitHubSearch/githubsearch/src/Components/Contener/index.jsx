import React, { Component } from 'react'

export default class Contener extends Component {
  render() {
    const { isFirst, isLoading, items, err } = this.props
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
