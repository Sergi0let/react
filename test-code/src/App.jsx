import React from 'react';
// import PropTypes from 'prop-types';
import Dialog from './Dialog.jsx';

import './index.scss';

export default class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({ isOpen: false });
  };

  showDialog = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show dialog
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
          title="Some title"
        >
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}
