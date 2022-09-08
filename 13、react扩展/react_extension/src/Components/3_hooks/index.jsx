import React from "react";
import root from "../..";

function Demo() {

  // React.useState 使函数式组件也能使用state
  const [count, setCount] = React.useState(0)
  // 使用 React.useRef()
  const myRef = React.useRef()

  function addCount() {
    // setCount(count+1)
    setCount(count => count + 1) // 函数为参数
  }
  /*
    1、如果在[]中不传任何参数 则视为生命周期函数 componentDidMount
    2、如果在[]中想要监听的参数 则视为生命周期函数 componentDidUpdate
    3、若第一个参数返回一个函数 则视为生命周期函数 componentWillUnmount
  */
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function unmount() {
    root.unmount()
  }

  function show() {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前和为：{count}</h2>
      <button onClick={addCount}>+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>提示</button>
    </div>
  )
}

export default Demo