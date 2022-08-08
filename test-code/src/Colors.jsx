import React from 'react';

import './counter.scss';

const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

export default class Colors extends React.Component {
  setColorBody = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          onClick={() => this.setColorBody(RED)}
          style={{ background: RED }}
          className="counter__button"
        ></button>
        <button
          onClick={() => this.setColorBody(GREEN)}
          style={{ background: GREEN }}
          className="counter__button"
        ></button>
        <button
          onClick={() => this.setColorBody(BLUE)}
          style={{ background: BLUE }}
          className="counter__button"
        ></button>
      </div>
    );
  }
}
