import React, { Component } from 'react';
import moment from 'moment';

import './clock.scss';

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
        time: moment(getTimeWithOffset(this.state.offset)).format('h:mm:ss A'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;

// hours: moment(getTimeWithOffset(this.state.offset)).format('h'),
// minutes: moment(getTimeWithOffset(this.state.offset)).format('mm'),
// seconds: moment(getTimeWithOffset(this.state.offset)).format('ss'),
// day: moment(getTimeWithOffset(this.state.offset)).format('A'),
// {this.state.hours}:{this.state.minutes}:{this.state.seconds}{' '}
// {this.state.day}
