import React, { Component } from "react";
// import Button from "./Button";
import PomoTimer from "./PomoTimer";

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            phase: {
                workTime: 25,
                smallBreak: 5,
                longBreak: 15,
            },
            curentPhaseIndex: 0,
        }
    }

    render() {
        const { phase, curentPhaseIndex } = this.state;
        const phaseKeys = Object.keys(phase);
        const curentPhase = phaseKeys[curentPhaseIndex];

        return(
            <>
                <PomoTimer minutes = {phase.curentPhase}/>
                <div className="Align-Line">
                    {curentPhase}
                </div>
            </>
        )
    }
}

export default Timer;