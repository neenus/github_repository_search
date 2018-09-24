import React, { Component } from 'react';
// import './components/_table.css';

class Table extends Component {
  render(){

    return(

    <table>
      <tr>
        <th>Name</th>
        <th>Language</th>
        <th>Latest tag</th>
        <th></th>
      </tr>
      <tr>
        <td>Shopify/Timber</td>
        <td>Liquid</td>
        <td>v1.0</td>
        <td><a href="#">Add</a></td>
      </tr>
      <tr>
        <td>Shopify/Timber</td>
        <td>Liquid</td>
        <td>v1.0</td>
        <td><a href="#">Add</a></td>
      </tr>
      <tr>
        <td>Shopify/Timber</td>
        <td>Liquid</td>
        <td>v1.0</td>
        <td><a href="#">Add</a></td>
      </tr>
  </table>

    )
  }
  
}

export default Table;