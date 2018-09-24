import React, { Component } from 'react';


export default class SearchBar extends Component{
  render(){
    return(
      <div className="search-bar">
        <form onSubmit={this.props.formSubmitHandler}>
          <input 
            name="searchBox" 
            id="search-box" 
            type="text" 
            placeholder="Enter a GitHub repo name"
            // onChange={this.props.searchBoxHandler}
            >
          </input>
          {/* <input id="search-btn" type="submit" value="Search"/> */}
          <button 
            // onClick={this.props.formSubmitHandler} 
            id="search-btn" 
            name="search">
            Search
          </button>
        </form>

      </div>
    )
  }
}