// reducer函数会接收两个参数，分别是：之前的状态(preState),动作对象(action)
const initState = 0
export default function countReducer(preState=initState,action){
  // 获取动作对象中的type、data
  const {type,data} = action
  // 根据type判断如何加工数据
  switch (type) {
    case 'increment':
      return Number(preState) + Number(data)
    case 'decrement':
      return Number(preState) - Number(data)
    default:
      return preState
  }
}