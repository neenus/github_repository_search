import React, { Component } from 'react';


export default class SearchBar extends Component{
  render(){
    return(
      <div className="search-bar">
          <input id="search-box" type="text" placeholder="Enter a github repository name"></input>
          <button id="search-btn" name="search">Search</button>
      </div>
    )
  }
}