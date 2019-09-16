import React, { Component } from 'react';
import stacks from '../data/stacks.json';

export default class StackList extends Component {
  render() {
    return (
      <div>
        {stacks.map(stack => {
          return <h4 key={stack.id}>{stack.title}</h4>;
        })}
      </div>
    );
  }
}
