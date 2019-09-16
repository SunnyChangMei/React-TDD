import React, { Component } from 'react';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';

export default class StackList extends Component {
  render() {
    return (
      <div>
        {stacks.map(stack => {
          return (
            <Link to="/stack" key={stack.id}>
              <h4>{stack.title}</h4>
            </Link>
          );
        })}
      </div>
    );
  }
}
