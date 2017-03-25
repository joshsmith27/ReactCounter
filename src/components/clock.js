import React, {Component} from 'react';

  let output;
  const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = [];
  },

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  },

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }
};
const renderTime = () => {
  const currentTime = new Date();
    let diem = 'AM';
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();

  if(h === 0){
    h=12;
  }else if (h>12){
    h = h -12;
    diem = 'PM';
  }
  if(m < 10){
    m = '0' + m;
  }
  output = {
    hours: h,
    minutes: m,
    diem
  };
  return output;
};
const Clock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState(){
    return {
      time: renderTime()
    };
  },
  componentDidMount(){
    this.setInterval(this.tick, 1000);
  },
  tick(){
    renderTime();
    this.setState({hours:output.hours, minutes:output.minutes, diem:output.diem});
  },
  render(){
    return(
      <div className="clock-container">
        <h1 className = "clock-title">Clock</h1>
          <p className = "clock">
            {this.state.hours}:{this.state.minutes}
            <span className = 'diem'>{this.state.diem}</span>
          </p>
      </div>
    );
  }
});

export default Clock
