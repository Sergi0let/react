import React from 'react';
import PropTypes from 'prop-types';

export default class Numbers extends React.Component {
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}
Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

Numbers.defaultProps = {
  title: 'Just 17',
  number: 17,
};

// ---- перевірка чи змінюєтся стат ---
/*
 shouldComponentUpdate(nextProps) {
    if (
      nextProps.number === this.props.number &&
      nextProps.title === this.props.title
    ) {
      return false;
    }
    return true;
  }
*/
