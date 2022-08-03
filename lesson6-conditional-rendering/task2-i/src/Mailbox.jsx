import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Massages</span>
      {unreadMessages.length > 0 && <span className="mailbox__count">0</span>}
    </div>
  );
};

export default Mailbox;
