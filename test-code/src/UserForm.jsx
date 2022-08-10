import React from 'react';

export default ({ userData, handleChange }) => {
  return (
    <form className="user-form">
      <input
        onChange={handleChange}
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
      />
      <input
        onChange={handleChange}
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
      />
    </form>
  );
};
