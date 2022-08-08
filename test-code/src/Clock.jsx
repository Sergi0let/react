import React, { Component } from 'react';
import moment from 'moment';

import getTimeWithOffset from './GetTimeWithOffset.jsx';

import './clock.scss';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: props.offset,
      date: moment(getTimeWithOffset(props.offset)).format('h:mm:ss A'),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: moment(getTimeWithOffset(this.state.offset)).format('h:mm:ss A'),
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
