import React from 'react';
import ReactDOM from 'react-dom';
import App, {color, number} from './components/App';
console.log(color, number)

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
