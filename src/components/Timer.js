// import logo from '../assets/play.png';
import React, { Component } from "react";
import BtnPause from "./BtnPause";
import BtnStart from "./BtnStart";

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
            showstart: false,
            showpause: true,
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
                    <h2 className="App-timer-number">0{this.state.minutes}:0{this.state.seconds}</h2>
                </div>
                <BtnStart/>
                <BtnPause/>
            </div>
        )
    }
}

export default Timer;