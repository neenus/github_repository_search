import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My GitHub Favourits</h1>
        </header>
        <div className="container">
          <div className="left">
          <p>This is left container</p>
          </div>
          <div className="right">
          <p>This is right container</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
