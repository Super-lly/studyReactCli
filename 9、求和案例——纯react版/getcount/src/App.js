import React, { Component } from "react";

import Content from './Components/Content'
import Hearder from "./Components/Hearder";
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <Hearder></Hearder>
        <Content></Content>
      </div>
    )
  }
}
