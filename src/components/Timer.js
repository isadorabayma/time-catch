import React, { Component } from "react";
import Button from "./Button";

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 15,
            zSeconds: 0,
            zMinutes: null,
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
            const { seconds, minutes } = this.state
            if ((minutes + seconds) !== 0) {
                this.setState((prevState) => ({
                    seconds: prevState.seconds === 0 ? 59 : prevState.seconds - 1,
                    minutes: prevState.seconds === 0 ? prevState.minutes - 1 : prevState.minutes,
                    zSeconds: prevState.seconds === 0 ? null : (prevState.seconds === 10 ? 0 : prevState.zSeconds),
                    zMinutes: (prevState.minutes === 10 && prevState.seconds === 0) ? 0 : prevState.zMinutes,
                }));
            } else {
                this.setState((prevState) => ({
                    showStart: !prevState.showStart,
                    showStop: !prevState.showStop,
                    showPause: !prevState.showPause,
                }));
                clearInterval(this.intervalId)
            };
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
                seconds: prevState.seconds + 1,
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

export default Timer;