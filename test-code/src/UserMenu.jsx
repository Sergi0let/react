import React from 'react';

export default ({ userData }) => {
  if (!userData) {
    return null;
  }
  const { name, avatar_url } = userData;
  return (
    <div className="menu">
      <span class="menu__greeting">Hello, {name}</span>
      <span className="menu__name"> </span>
      <img src={avatar_url} alt="User Avatar" className="menu__avatar" />
    </div>
  );
};
