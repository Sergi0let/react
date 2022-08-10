import React from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      date: moment(getTimeWithOffset(props.offset)).format('h:mm:ss A'),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
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
