import React from 'react';

const Expand = ({ children, title, togglerHandler }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={togglerHandler} className="expand__toggle-btn">
          {!children ? (
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

// підключення через Компоненту

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// {
//   !isClose ? (
//     <FontAwesomeIcon icon={faChevronDown} size="2x" />
//   ) : (
//     <FontAwesomeIcon icon={faChevronUp} size="2x" />
//   );
// }
