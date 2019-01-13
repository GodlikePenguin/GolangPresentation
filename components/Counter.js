import React from 'react';

export default class Counter extends React.Component {
  state = { counter: 0}
  
  handleClick = () => {
    this.setState({counter: this.state.counter + 1})
  }
  
  render() {
    return (
      <div>
      <h1>Components</h1>
      <p>You can even use components</p>
      <button onClick={this.handleClick}>Click me</button>
      <p>{this.state.counter}</p>
      </div>
      )
    }
  }
  
  