import React from 'react';
import Expand from './Expand.jsx';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.setState({ isOpen: false });
  }

  togglerHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    let content = 'none';
    if (this.state.isOpen) {
      content = 'block';
    }
    return (
      <div className="app">
        <Expand
          isOpen={this.state.isOpen}
          title="Some title"
          togglerHandler={this.togglerHandler}
        >
          <p style={{ display: content }}>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
