import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from "./components/TextField";
import Card from "./components/Card";

class App extends Component {
  state = {
    isClicked: false
  };

  onClick = () => {
    this.setState({
      ...this.state,
      isClicked: true
    })
    console.log(this.state.isClicked);
  }

  render() {
    return this.state.isClicked ? (
      <div className="App">
        <TextField/>
        <Card onClick={this.onClick}/>
      </div>
    ) : (
      <div className="App">
        <TextField/>
        <Card onClick={this.onClick} isClicked={this.state.isClicked}/>
      </div>
    )
  }
}

export default App;
