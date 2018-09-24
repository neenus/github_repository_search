import React, { Component } from 'react';

// import axios
// import axios from 'axios';

// import CSS files
import './App.css';
import './components/_table.css';

// Import components
// import SearchBar from './components/_search-bar.js';
import Table from './components/_table.js';

class App extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {value: ''};
  }

  // componentDidMount(){
  //   console.log("compnentDidMount <App />");
  //   // console.log(searchBox);
  // }
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="App-title">My GitHub Favourits</h1>
        </header>
          <div className="sidebar-left">
          <form onSubmit={this.handleSubmit}>
            <input 
              name="searchBox" 
              id="search-box" 
              type="text" 
              placeholder="Enter a GitHub repo name"
              value={this.state.value}
              onChange={this.handleChange}
              >
            </input>
          {/* <input id="search-btn" type="submit" value="Search"/> */}
          <input 
            // onChange={this.handleChange} 
            id="search-btn" 
            name="search"
            type='submit'
            value='Search'>
          </input>
        </form>
          {/* <SearchBar 
            formSubmitHandler={this.handleSubmit} 
          >
          </SearchBar> */}
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
    const input = event.target.searchBox.value
    alert(input)
    this.setState({
      value: '',
    })
    // console.log(`input after setting state is: ${input.value}`);
    
  }
}

export default App;
