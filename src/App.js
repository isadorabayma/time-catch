import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
