/*
  本文件用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入 createStore ，专门用于创建store对象
import {legacy_createStore as createStore} from 'redux'
// 引入Count组件的reducer
import countReducer from './count_reducer'
// 暴露store
export default createStore(countReducer)