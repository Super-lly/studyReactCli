import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import contentReducer from './count_reducer'
export default createStore(contentReducer,applyMiddleware(thunk))

