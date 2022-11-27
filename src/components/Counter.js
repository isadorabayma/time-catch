import React, { Component } from "react";
import Button from "./Button";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
            zSeconds: 0,
            zMinutes: 0,
            showStart: true,
            showPause: false,
            showStop: false,
            showResume: false,
        }

        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
    }

    startTimer() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds === 59 ? 0 : prevState.seconds + 1,
                minutes: prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes,
                zSeconds: prevState.seconds === 9 ? null : (prevState.seconds === 59 ? 0 : prevState.zSeconds),
                zMinutes: (prevState.minutes === 9 && prevState.seconds === 59) ? null : prevState.zMinutes,
            }));
        }, 1000);
        this.setState((prevState) => ({
            showStart: !prevState.showStart,
            showStop: !prevState.showStop,
            showPause: !prevState.showPause,
        }));
    }
    
    pauseTimer() {
        clearInterval(this.intervalId)
        this.setState((prevState) => ({
            showResume: !prevState.showResume,
            showPause: !prevState.showPause,
        }));
    }

    resumeTimer() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds === 59 ? 0 : prevState.seconds + 1,
                minutes: prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes,
                zSeconds: prevState.seconds === 9 ? null : (prevState.seconds === 59 ? 0 : prevState.zSeconds),
                zMinutes: (prevState.minutes === 9 && prevState.seconds === 59) ? null : prevState.zMinutes,
            }));
        }, 1000);
        this.setState((prevState) => ({
            showResume: !prevState.showResume,
            showPause: !prevState.showPause,
        }));
    }
    
    stopTimer() {
        clearInterval(this.intervalId)
        this.setState((prevState) => ({
            showStart: !prevState.showStart,
            showStop: !prevState.showStop,
            showPause: false,
            showResume: false,
            seconds: 0,
            minutes: 0,
            zSeconds: 0,
            zMinutes: 0,
        }));
    }

    render() {
        const { showPause, showStart, showStop, showResume, 
            zMinutes, zSeconds, seconds, minutes } = this.state
        return(
            <>
                <div className="App-timer">
                    <h2 className="App-timer-number">
                        {zMinutes}{minutes}:{zSeconds}{seconds}
                    </h2>
                </div>
                <div className="Align-Line">
                    {showStart && <Button onClick={this.startTimer} title="Start"/>}
                    {showStop && <Button onClick={this.stopTimer} title="Stop"/>}
                    {showPause && <Button onClick={this.pauseTimer} title="Pause" />}
                    {showResume && <Button onClick={this.resumeTimer} title="Resume" />}
                </div>
            </>
        )
    }
}

export default Counter;