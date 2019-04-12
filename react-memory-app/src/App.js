import React, { Component } from 'react';
import './App.css';

import TextField from "./components/TextField";
import Card from "./components/Card";

class App extends Component {
  state = {
    name: "",
    isClicked: false
  };

  // If i want to pass this as prop i have to bind this method
  onClick = () => {
    this.setState({
      ...this.state,
      isClicked: true
    })
  }

  render() {
    return (
      <div className="App">
        <TextField name={this.state.name}/>
        <Card name="Card" selected={this.state.isClicked} onClick={(name) => {
          this.setState({
            ...this.state,
            name: name,
            isClicked: true
          });
        }}/>
      </div>
    )
  }
}

export default App;
