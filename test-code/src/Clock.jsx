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
      date: moment(getTimeWithOffset(props.offset)).format('H:MM:SS A'),
    };
  }

  componentDidMount() {
    this.clockId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
  }

  tick = () => {
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
