import React from 'react';
import PropTypes from 'prop-types';

import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expand = ({ isClose, children, title, togglerHandler }) => {
  let button;
  if (!isClose) {
    button = <FontAwesomeIcon icon={faChevronDown} />;
  } else {
    button = <FontAwesomeIcon icon={faChevronUp} />;
  }

  let content;
  if (isClose) {
    content = children;
  } else {
    content = '';
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={togglerHandler} className="expand__toggle-btn">
          {button}
        </button>
      </div>
      <div className="expand__content">{content}</div>
    </div>
  );
};
export default Expand;
