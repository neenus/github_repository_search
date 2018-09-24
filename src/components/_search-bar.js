import React, { Component } from 'react';

export default class SearchBar extends Component{
  render(){
    return(
      <div className="search-bar">
        <form onSubmit={this.props.handleSubmit}>
            <input 
              name="searchBox" 
              id="search-box" 
              type="text" 
              placeholder="Enter a GitHub repo name"
              value={this.props.value}
              onChange={this.props.handleChange}
              >
            </input>
          <input 
            id="search-btn" 
            name="search"
            type='submit'
            value='Search'>
          </input>
        </form>

      </div>
    )
  }
}