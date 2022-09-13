import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      /* 
        1、在组件中可以使用<Fragment></Fragment>标签或者<></>空标签作为根节点
        2、在编译过后<Fragment></Fragment>和<></>空标签不会渲染在DOM中
        3、<Fragment></Fragment>只允许key作为属性，而空标签不能传任何属性
      */
      <Fragment key={1}>
        <input type="text" />
        <br />
        <input type="text" />
      </Fragment>
    )
  }
}
