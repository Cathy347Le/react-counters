import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="counter-item">
        <h3>Counter: {this.state.count}</h3>
        <button className="add" onClick={this.increaseCount}>
          Increment
        </button>
        <button className="subtract" onClick={this.decreaseCount}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
