import React from 'react';

const Expand = ({ isClose, children, title, togglerHandler }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={togglerHandler} className="expand__toggle-btn">
          {!isClose ? (
            <i class="fas fa-chevron-down"></i>
          ) : (
            <i class="fas fa-chevron-up"></i>
          )}
        </button>
      </div>
      <div className="expand__content">{isClose ? children : null}</div>
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