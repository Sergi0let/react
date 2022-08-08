import React from 'react';

import './picker.scss';

export default class ColorPicker extends React.Component {
  state = {
    color: '',
  };

  hadlerCoral = () => {
    this.setState({
      state: (this.state.color = 'Coral'),
    });
  };

  handlerAqua = () => {
    this.setState({
      state: (this.state.color = 'Aqua'),
    });
  };

  handlerBisque = () => {
    this.setState({
      state: (this.state.color = 'Bisque'),
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseOver={this.hadlerCoral}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={this.handlerAqua}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={this.handlerBisque}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}
