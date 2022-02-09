import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function clickEvent(event) {
  event.preventDefault();
  console.log("test"); 
}

ReactDOM.render(
  <a href="#" onClick={clickEvent}>Click me!</a>,
  document.getElementById('root')
); 
