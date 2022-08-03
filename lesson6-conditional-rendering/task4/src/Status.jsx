import React from 'react';

import Offline from './Offline.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };

    // console.log(this.state.isOnline);
  }

  handleOnline = () => {
    this.setState({
      isOnline: true,
    });
  };
  handleOfline = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    let button;
    if (!this.state.isOnline) {
      button = (
        <button onClick={this.handleOnline} className="status__btn">
          Reconnect
        </button>
      );
    } else {
      button = (
        <button onClick={this.handleOffline} className="status__btn">
          Reconnect
        </button>
      );
    }
    return (
      <div className="status">
        <Offline isOnline={this.state.isOnline} />
        {button}
      </div>
    );
  }
}

export default Status;
