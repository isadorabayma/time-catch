import React, {Component} from "react";
import Button from "./Button";
import Counter from "./Counter";
import Timer from "./Timer";
import Pomodoro from "./Pomodoro";

class Body extends Component {
    constructor() {
        super();
        this.state = {
            showTimer: false,
            showPomodoro: false,
            showCounter: true,
        }

        this.chooseType = this.chooseType.bind(this);
    }

    chooseType(type) {
        this.setState(() => ({
            showTimer: "Timer" === type ? true : false,
            showPomodoro: "Pomodoro" === type ? true : false,
            showCounter: "Counter" === type ? true : false,
        }));
    }

    render() {
        const { showTimer, showPomodoro, showCounter } = this.state;
        return(
        <div className="App-header">
            <div className="Align-Line">
                {/* <Button onClick={() => {this.chooseType("Timer")}} title="Timer" />
                <Button onClick={() => {this.chooseType("Pomodoro")}} title="Pomodoro"/> */}
                <Button onClick={() => {this.chooseType("Counter")}} title="Counter"/>
            </div>
            {showTimer && <Timer/>}
            {showPomodoro && <Pomodoro/>}
            {showCounter && <Counter/>}
        </div>
        )
    }
}

export default Body;