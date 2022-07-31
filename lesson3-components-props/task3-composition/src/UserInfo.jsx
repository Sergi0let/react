import React from 'react';
import Avatar from './Avatar.jsx';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} author={props.user.author} />
      <div className="user-info__name">{props.user.author}</div>
    </div>
  );
};

export default UserInfo;
