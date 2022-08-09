import React from 'react';
import Message from './Message.jsx';

export default class Page extends React.Component {
  state = {
    text: null,
  };

  handlerFirstBtn = () => {
    this.setState({ text: 'Hello, world!' });
  };

  handlerSecondBtn = () => {
    this.setState({ text: 'Another exciting text.' });
  };

  reset = () => {
    this.setState({ text: null });
  };
  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button onClick={this.handlerFirstBtn} className="btn">
            Text 1
          </button>
          <button onClick={this.handlerSecondBtn} className="btn">
            Text 2
          </button>
          <button onClick={this.reset} className="btn">
            Clear
          </button>
        </div>
      </div>
    );
  }
}
