import React from 'react';
import Expand from './Expand.jsx';

class App extends React.Component {
  state = {
    isOpen: true,
  };

  componentDidMount() {
    this.setState({ isOpen: false });
  }

  togglerHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    let content;
    if (this.state.isOpen) {
      content = (
        <p>
          Hooks are a new addition in React 16.8. They let you use state and
          other React features without writing a class.
        </p>
      );
    } else {
      null;
    }
    return (
      <div className="app">
        <Expand
          isOpen={this.state.isOpen}
          title="Some title"
          togglerHandler={this.togglerHandler}
        >
          {content}
        </Expand>
      </div>
    );
  }
}

export default App;
