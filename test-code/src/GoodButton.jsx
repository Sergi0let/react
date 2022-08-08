import React from 'react';

import './fancyButton.scss';

export default class GoodButton extends React.Component {
  handleClick = (e) => alert(e.target.textContent);

  render() {
    return (
      <button onClick={this.handleClick} className="fancy-button">
        Click me!
      </button>
    );
  }
}
