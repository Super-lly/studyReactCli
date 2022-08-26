import React, { Component } from "react";

import './App.css'
import SearchHeader from "./Components/SearchHeader";
import Contener from "./Components/Contener";

export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <SearchHeader></SearchHeader>
        <Contener></Contener>
      </div>
    )
  }
}
