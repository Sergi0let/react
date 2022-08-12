import React from 'react';

const Expand = ({ isOpen, togglerHandler, children, title }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={togglerHandler} className="expand__toggle-btn">
          {!isOpen ? (
            <i className="fas fa-chevron-down"></i>
          ) : (
            <i className="fas fa-chevron-up"></i>
          )}
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};
export default Expand;
