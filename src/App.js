import React, { Component } from 'react';
import './App.css';
import './components/_table.css';
import SearchBar from './components/_search-bar.js';
import Table from './components/_table';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My GitHub Favourits</h1>
        </header>
          <div className="sidebar-left">
          <SearchBar></SearchBar>
          <div className="search-results">
          <Table></Table>
        </div>
          </div>
          <div className="sidebar-right">
            <div className="search-results">
              <Table></Table>
            </div>
          </div>
          <div className="footer">
          <p>Created with love by <a href="https://www.github.com/neenus">neenus</a></p>
          
          </div>
      </div>
    );
  }
}

export default App;
