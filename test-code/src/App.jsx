import React from 'react';
import Expand from './Expand.jsx';

import './index.scss';

export default class App extends React.Component {
  state = {
    isClose: false,
  };

  togglerHandler = () => {
    this.setState({ isClose: !this.state.isClose });
  };

  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand
          isClose={this.state.isClose}
          togglerHandler={this.togglerHandler}
          title="Some title"
        >
          {this.state.isClose && elem}
        </Expand>
      </div>
    );
  }
}
