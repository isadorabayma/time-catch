import React, {Component} from "react";
import Button from "./Button";
import Timer from "./Timer";

class Body extends Component {
  render() {
    return(
      <div className="App-header">
          <div className="Align-Line">
              <Button title="Timer" />
              <Button title="Pomodoro"/>
              <Button title="Counter"/>
          </div>
          <Timer/>
      </div>
    )
  }
}

export default Body;