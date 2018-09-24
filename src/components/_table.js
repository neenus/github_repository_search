import React, { Component } from 'react';
// import './components/_table.css';

class Table extends Component {
  render(){

    return(
    <table> 
      <tbody>
        <tr>
          <th>Name</th>
          <th>Language</th>
          <th>Latest tag</th>
          <th></th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Shopify/Timber</td>
          <td>Liquid</td>
          <td>v1.0</td>
          <td><a href="">Add</a></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Shopify/Timber</td>
          <td>Liquid</td>
          <td>v1.0</td>
          <td><a href="">Add</a></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Shopify/Timber</td>
          <td>Liquid</td>
          <td>v1.0</td>
          <td><a href="">Add</a></td>
        </tr>
      </tbody>
  </table>

    );
  }
  
}

export default Table;