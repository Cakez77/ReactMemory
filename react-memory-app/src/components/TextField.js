import React, { Component } from 'react';

class TextField extends Component {
    render() {
        return (
            <div style={{height: 50, width: 200}}>
                {this.props.name}
            </div>
        )
    }
}

export default TextField;