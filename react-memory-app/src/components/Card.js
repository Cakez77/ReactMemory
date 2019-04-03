import React, { Component } from 'react';


class Card extends Component {
  constructor(props){
    super(props);

    this.state = { clicked: false }
  }

  onClick = () => {
    this.setState({
      ...this.state,
      clicked: !this.state.clicked
    })
  }

  render() {
    return !this.state.clicked ? (
    <div onClick={this.onClick} style={{height: 200, width: 200, backgroundColor: '#555555'}}>
      {"Card"}
    </div>
    ) : (
      <div onClick={this.onClick} style={{height: 200, width: 200, backgroundColor: '#555555', border: '2px solid #000000'}}>
      {"Card"}
    </div>
    )
  }
}

export default Card;