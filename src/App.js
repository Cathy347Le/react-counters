import React, { Component } from "react";
import "./App.scss";
import Header from "./Components/Header";
import CounterList from "./Components/CounterList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counters: 3 };

    this.increaseCounters = this.increaseCounters.bind(this);
    this.decreaseCounters = this.decreaseCounters.bind(this);
  }

  increaseCounters() {
    let counters = this.state.counters + 1;
    this.setState({ counters });
  }

  decreaseCounters() {
    let counters = this.state.counters - 1;
    this.setState({ counters });
  }

  render() {
    // console.log(this.state.counters);
    return (
      <div className="App">
        <h1 className="app-title">React Counter Practice</h1>
        <Header
          counters={this.state.counters}
          increaseCounters={this.increaseCounters}
          decreaseCounters={this.decreaseCounters}
        />
        <CounterList counters={this.state.counters} />
      </div>
    );
  }
}

export default App;
