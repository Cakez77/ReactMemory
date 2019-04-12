import React, { Component } from 'react';


class Card extends Component {
  render() {
    return !this.props.selected ? (
    <div onClick={() => this.props.onClick(this.props.name)} style={{height: 200, width: 200, backgroundColor: '#555555'}}>
      {"Card"}
    </div>
    ) : (
      <div onClick={() => this.props.onClick(this.props.name)} style={{height: 200, width: 200, backgroundColor: '#555555', border: '2px solid #000000'}}>
      {"Card"}
    </div>
    )
  }
}

export default Card;