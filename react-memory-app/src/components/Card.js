import React, { Component } from 'react';


class Card extends Component {
    render() {
        return this.props.isClicked ? (
            <div style={{height: 200, width: 200, backgroundColor: '#999999', border: '2px solid #000000'}} onClick={this.props.onClick}>
                {"Is Clicked"};
            </div>
        ) : (
            <div style={{height: 200, width: 200, backgroundColor: '#555555', border: '20px solid #000000'}} onClick={this.props.onClick}>
            {"Not Clicked yet"};
        </div>
        )

    }
}

export default Card;