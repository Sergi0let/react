import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Expand = ({ isClose, children, title, togglerHandler }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={togglerHandler} className="expand__toggle-btn">
          {!isClose ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </button>
      </div>
      <div className="expand__content">{isClose ? children : null}</div>
    </div>
  );
};
export default Expand;
library.add(faChevronUp, faChevronDown);
