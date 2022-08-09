import React from 'react';

export default ({ text }) => {
  if (!text) {
    return null;
  }
  return <div className="message">{text}</div>;
};
