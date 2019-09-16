import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Stack extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>example title</h3>
      </div>
    );
  }
}
