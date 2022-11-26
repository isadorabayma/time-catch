import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Timer/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}

export default App;
