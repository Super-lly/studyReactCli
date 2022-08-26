import React, { Component } from "react";

import './App.css'
import SearchHeader from "./Components/SearchHeader";
import Contener from "./Components/Contener";

export default class App extends Component {
  state = {
    isFirst:true,
    isLoading:false,
    items:[],
    err:''
  }

  changeState = (obj) =>{
    this.setState(obj)
  }
  render() {
    return (
      <div className="container">
        <SearchHeader changeState={this.changeState}></SearchHeader>
        <Contener {...this.state}></Contener>
      </div>
    )
  }
}
