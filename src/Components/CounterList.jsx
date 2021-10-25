import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    // console.log(this.props.counters);

    let counters = [];
    for (let i = 0; i < this.props.counters; i++) {
      counters.push(<Counter key={i} />);
    }

    return <div className="counters-container">{counters}</div>;
  }
}

export default CounterList;
