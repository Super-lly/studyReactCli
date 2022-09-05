import React, { Component } from "react";

import store from "./redux/store";

import Count from './Containers/Count'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    )
  }
}
