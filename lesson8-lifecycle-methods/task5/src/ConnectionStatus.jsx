import React from 'react';

import Offline from './Offline.jsx';
import Online from './Online.jsx';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onConnectionChange);
    window.addEventListener('offline', this.onConnectionChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onConnectionChange);
    window.removeEventListener('offline', this.onConnectionChange);
  }

  onConnectionChange = (event) => {
    this.setState({ status: event.type });
  };

  render() {
    if (this.state.status === 'online') {
      return <Online />;
    }

    return <Offline />;
  }
}
export default ConnectionStatus;
