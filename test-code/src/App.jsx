import React from 'react';
import Clock from './Clock.jsx';

import './index.scss';

export default class App extends React.Component {
  state = {
    visible: true,
  };

  toggleHide = () => {
    console.log('ggggg');
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.toggleHide}>Hide</button>
        {this.state.visible && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="New York" offset={-5} />
            <Clock location="Kiev" offset={2} />
          </>
        )}
      </>
    );
  }
}
