import React, { Component } from 'react';

// import axios
import axios from 'axios';

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
          <h1 className="App-title">My GitHub Favourits </h1>
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
    const input = event.target.searchBox.value
    this.getRepo(input)
  }


  async getRepo(input) {
    const api_url= `https://api.github.com/search/repositories?q=${input}`
    if (input !== '') { 
      axios.get(`${api_url}`)
      // .then(response => response.json())
      .then(response => {
        let result = response.data.items
        console.log(result)
        return result;
      })
      this.setState({
        // name: this.result.full_name,
      })
    } else {
      alert('Please provide search input')
    }
  }
}

export default App;
