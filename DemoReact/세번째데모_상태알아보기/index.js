import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//State사용하기 
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : 'visitor'
    }
  }
  render() {
    return <div>
      <h1>Hello, {this.state.user}!</h1>
      <button onClick={() =>
        this.setState({user:"전우치"})}>I know your name!</button>
      </div>;
      }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('root')
); 
