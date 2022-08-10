import React from 'react';

export default class UserMenu extends React.Component {
  render() {
    if (!this.props.userData) {
      return null;
    }
    const { name, avatar_url } = this.props.userData;

    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {name}</span>
        <span className="menu__name"> </span>
        <img src={avatar_url} alt="User Avatar" className="menu__avatar" />
      </div>
    );
  }
}
