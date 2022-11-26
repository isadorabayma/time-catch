import logo from '../assets/play.png';
import React, { Component } from "react";

class Timer extends Component {
    render() {
        return(
            <div className="App-header">
                <p>
                    . Timer  . | . Pomodoro . | . Counter .
                </p>
                <div className="App-timer">
                    <img src={logo} className="App-play" alt="logo" />
                </div>
                <p>
                    Start
                </p>
            </div>
        )
    }
}

export default Timer;