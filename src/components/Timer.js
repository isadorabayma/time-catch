import React, { Component } from "react";
import Button from "./Button";

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
            showStart: true,
            showPause: false,
            showStop: false,
            showResume: false,
        }

        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1,
            }));
        }, 1000);
    }

    startTimer() {
        this.setState((prevState) => ({
            showStart: !prevState.showStart,
            showStop: !prevState.showStop,
            showPause: !prevState.showPause,
        }));
    }

    pauseTimer() {
        this.setState((prevState) => ({
            showResume: !prevState.showResume,
            showPause: !prevState.showPause,
        }));
    }

    render() {
        const { showPause, showStart, showStop, showResume } = this.state
        return(
            <div className="App-header">
                <div className="Align-Line">
                    <Button title="Timer" />
                    <Button title="Pomodoro"/>
                    <Button title="Counter"/>
                </div>
                <div className="App-timer">
                    <h2 className="App-timer-number">
                        0{this.state.minutes}:0{this.state.seconds}
                    </h2>
                </div>
                <div className="Align-Line">
                    {showStart && <Button onClick={this.startTimer} title="Start"/>}
                    {showStop && <Button onClick={this.startTimer} title="Stop"/>}
                    {showPause && <Button onClick={this.pauseTimer} title="Pause" />}
                    {showResume && <Button onClick={this.pauseTimer} title="Resume" />}
                </div>
            </div>
        )
    }
}

export default Timer;