import logo from '../assets/play.png';
import React, { Component } from "react";

class Timer extends Component {
    render() {
        return(
            <div className="App-header">
                <div className="App-timer">
                    <img src={logo} className="App-play" alt="logo" />
                </div>
                <p>
                    Hello world
                </p>
            </div>
        )
    }
}

export default Timer;