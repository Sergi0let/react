import React, { Component } from 'react';
import Moment from 'moment';

import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: props.offset,
    };

    setInterval(() => {
      this.setState({
        seconds: moment(getTimeWithOffset(this.state.offset)).format('s'),
        minutes: getTimeWithOffset(this.state.offset).getMinutes('m'),
        hours: moment(getTimeWithOffset(this.state.offset)).format('h'),
        day: moment(getTimeWithOffset(this.state.offset)).format('A'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}{' '}
          {this.state.day}
        </div>
      </div>
    );
  }
}

export default Clock;
