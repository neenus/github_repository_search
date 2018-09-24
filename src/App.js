import React, { Component } from 'react';

// import axios
// import axios from 'axios';

// import CSS files
import './App.css';
import './components/_table.css';

// Import components
import SearchBar from './components/_search-bar.js';
import Table from './components/_table.js';

class App extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      value: '',
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    console.log("compnentDidMount");
    // console.log(searchBox);
  }
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="App-title">My GitHub Favourits</h1>
        </header>
          <div className="sidebar-left">
          <SearchBar 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          >
          </SearchBar>
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

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const api_url= 'https://api.github.com/search/repositories?q='
    const input = event.target.searchBox.value
    alert(input)
    fetch(`${api_url}${input}`)
    .then(blob => blob.json())
    .then(response => {
      console.log(response)
    })
    this.setState({
      value: '',
    })
    // console.log(`input after setting state is: ${input.value}`);
    
  }
}

export default App;
