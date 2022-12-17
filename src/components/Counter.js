import React, { Component } from "react";
import Button from "./Button";
import Categorys from "./Categorys";
import times from "../data/times";

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
            showCategorys: false,
            categoryId: 0,
            times: times,
        }

        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.saveTimer = this.saveTimer.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
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
            showSave: !prevState.showSave,
            showStop: !prevState.showStop,
            showPause: false,
            showResume: false,
            showCategorys: true,
        }));
    }

    saveTimer() {
        clearInterval(this.intervalId)
        const { times, seconds, minutes, categoryId } = this.state;
        const newId = times.slice(-1)[0].id+1;
        const newDuration = seconds > 30 ? minutes + 1 : minutes;
        const createdAt = new Date().toJSON().slice(11,19);


        this.setState((prevState) => ({
            showSave: !prevState.showSave,
            showStart: !prevState.showStart,
            showCategorys: false,
            categorySelected: "Select a category",
            seconds: 0,
            minutes: 0,
            zSeconds: 0,
            zMinutes: 0,
            times: [...times, {
                id: newId,
                durationMin: newDuration,
                startDataAndTime: createdAt,
                categoryId: categoryId,
            }]
        }));
    }

    handleCategory(categoryId) {
        this.setState({ categoryId: categoryId });
    }

    render() {
        const { showPause, showStart, showStop, showResume, showSave,
            zMinutes, zSeconds, seconds, minutes } = this.state
        return(
            <>
                <div className="App-timer">
                    <h2 className="App-timer-number">
                        {zMinutes}{minutes}:{zSeconds}{seconds}
                    </h2>
                </div>
                <div className="Align-Line">
                    {showStart && <Button onClick={ this.startTimer } title="Start"/>}
                    {showStop && <Button onClick={ this.stopTimer } title="Stop"/>}
                    {showPause && <Button onClick={ this.pauseTimer } title="Pause" />}
                    {showResume && <Button onClick={ this.resumeTimer } title="Resume" />}
                </div>
                <Categorys handleCategory={ this.handleCategory } />
                <div className="Align-Line">{showSave && <Button onClick={ this.saveTimer } title="Save" />}</div>

            </>
        )
    }
}

export default Counter;