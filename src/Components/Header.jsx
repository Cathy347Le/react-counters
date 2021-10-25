import React from "react";

const Header = (props) => {
  //   console.log(props.counters);
  return (
    <div className="header">
      <h2>Number of Counters: {props.counters}</h2>
      <button onClick={props.increaseCounters}>+</button>
      <button onClick={props.decreaseCounters}>-</button>
    </div>
  );
};

export default Header;
