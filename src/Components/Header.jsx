import React, { Component } from "react";

class Header extends Component {
  render() {
    //    console.log(this.props.counters);
    return (
      <div className="header">
        <h2>Number of Counters: {this.props.counters}</h2>
        <button onClick={this.props.increaseCounters}>+</button>
        <button onClick={this.props.decreaseCounters}>-</button>
      </div>
    );
  }
}

export default Header;
