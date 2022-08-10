import React, { Component } from 'react';
import moment from 'moment';

import getTimeWithOffset from './getTimeWithOffset.jsx';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      date: moment(getTimeWithOffset(props.offset)).format('H:MM:SS A'),
    };
  }

  componentDidMount() {
    this.clockId = setInterval(() => this.tickClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
  }

  tickClock = () => {
    this.setState({
      date: moment(getTimeWithOffset(this.state.offset)).format('H:MM:SS A'),
    });
  };
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.date}</div>
      </div>
    );
  }
}
