import React, { Component } from "react";

class Button extends Component {
    render() {
        return(
            <button
                className="App-btn"
                onClick={this.props.onClick}
            >
                {this.props.title}
            </button>
        );
    };
};

export default Button;