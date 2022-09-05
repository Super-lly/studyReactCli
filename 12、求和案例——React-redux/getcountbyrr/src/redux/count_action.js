import {INCREMENT,DECREMENT} from './constent'
export const createIncrement = data => ({type:INCREMENT,data})
export const createdecrement = data => ({type:DECREMENT,data})
// 异步action 传入的action为一个函数 非必须使用
export const asyncIncrement = (data,time) =>{
  return (dispatch) =>{
    setTimeout(()=>{
      dispatch(createIncrement(data))
    },time)
  }
}