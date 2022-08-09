import React from 'react';

export default ({ text }) => (
  <>{text && <div className="message">{text}</div>}</>
);
