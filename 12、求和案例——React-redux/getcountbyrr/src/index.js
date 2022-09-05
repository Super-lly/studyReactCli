import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BrowserRouter><App/></BrowserRouter>)
// 实现数据更新后的页面刷新
store.subscribe(()=>{
  root.render(<BrowserRouter><App/></BrowserRouter>)
})