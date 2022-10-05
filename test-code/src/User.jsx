import React, { useState, useEffect } from 'react';

import { getUserData } from './user.gateway.js';

export default function User({ match }) {
  const { userId } = match.params;
  const [userInfo, setUserInfo] = useState([]);

  const fetchUserData = (userId) =>
    getUserData(userId).then((userData) => setUserInfo(userData));

  useEffect(() => {
    fetchUserData(userId);
  }, []);

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={userInfo.avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userInfo.name}</span>
        <span className="user__location">{userInfo.location}</span>
      </div>
    </div>
  );
}
