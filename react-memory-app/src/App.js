import React, { Component } from 'react';
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
    return (
      <div className="App">
        <TextField/>
        <Card/>
      </div>
    )
  }
}

export default App;
