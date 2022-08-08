import React from 'react';

import './toggler.scss';

export default class Toggler extends React.Component {
  state = {
    isStatusOn: true,
  };

  handleClick = () => {
    this.setState((state) => ({
      isStatusOn: !state.isStatusOn,
    }));
  };

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.isStatusOn ? 'Off' : 'On'}
      </div>
    );
  }
}
