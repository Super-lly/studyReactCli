import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// 用于解析函数形式的action
import thunk from 'redux-thunk'
import contentReducer from './count_reducer'
export default createStore(contentReducer,applyMiddleware(thunk))

