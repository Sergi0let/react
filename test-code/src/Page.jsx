import React from 'react';
import Message from './Message.jsx';

const textFirst = 'Hello, world!';
const textSecond = 'Another exciting text.';

export default class Page extends React.Component {
  state = {
    text: null,
  };

  setText = (text) => {
    this.setState({ text });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button onClick={() => this.setText(textFirst)} className="btn">
            Text 1
          </button>
          <button onClick={() => this.setText(textSecond)} className="btn">
            Text 2
          </button>
          <button onClick={() => this.setText('')} className="btn">
            Clear
          </button>
        </div>
      </div>
    );
  }
}
