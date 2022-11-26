// import logo from '../assets/play.png';
import React, { Component } from "react";

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
        }
    }

    render() {
        return(
            <div className="App-header">
                <p>
                    . Timer  . | . Pomodoro . | . Counter .
                </p>
                <div className="App-timer">
                    {/* <img src={logo} className="App-play" alt="logo" /> */}
                    <h2 className="App-timer-number">0{this.state.seconds}:0{this.state.minutes}</h2>
                </div>
                <p>
                    Start
                </p>
            </div>
        )
    }
}

export default Timer;