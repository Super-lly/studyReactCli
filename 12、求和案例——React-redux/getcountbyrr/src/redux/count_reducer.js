import {INCREMENT,DECREMENT} from './constent'
const initState = 0
export default function contentReducer(preState=initState,action){
  const {type,data} = action
  switch (type) {
    case INCREMENT:
      return Number(preState) + Number(data)
    case DECREMENT:
      return Number(preState) - Number(data)
    default:
      return preState
  }
}