import React, {Component} from "react";
import Button from "./Button";
import Counter from "./Counter";
// import Timer from "./Timer";
// import Pomodoro from "./Pomodoro";

class Body extends Component {
  render() {
    return(
      <div className="App-header">
          <div className="Align-Line">
              <Button title="Timer" />
              <Button title="Pomodoro"/>
              <Button title="Counter"/>
          </div>
          {/* <Timer/> */}
          <Counter/>
          {/* <Pomodoro/> */}
      </div>
    )
  }
}

export default Body;