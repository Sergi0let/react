import React from 'react';

import './counter.scss';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter - 1 });
  }

  decrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  reset() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div className="counter">
        <button
          onClick={this.increment}
          data-action="decrease"
          className="counter__button"
        >
          -
        </button>
        <span onClick={() => this.reset()} className="counter__value">
          {this.state.counter}
        </span>
        <button
          onClick={this.decrement}
          data-action="increase"
          className="counter__button"
        >
          +
        </button>
      </div>
    );
  }
}
