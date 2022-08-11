import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};
export default Dialog;
Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  title: '',
};
// <!-- App -->
// <div className="app">
//   <button className="btn">Show dialog</button>
//   <!-- Dialog -->
//   <div className="dialog">
//     <div className="dialog__heading">
//       <h4 className="dialog__title">Recommendation</h4>
//       <button className="dialog__close-btn">+</button>
//     </div>
//     <div className="dialog__content">
//       <!-- Dialog children -->
//       <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
//     </div>
//   </div>
// </div>
