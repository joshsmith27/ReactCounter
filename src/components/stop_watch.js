import React, {Component} from 'react';

// class StopWatch extends Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       seconds: 0,
//       minutes: 0,
//       hours: 0,
//       timeStarted: false,
//       intervalId: undefined
//     };
//   }
//
//   render(){
//     return (
//       <div>
//       <p>HR:{this.state.hours}   MIN:{this.state.minutes}   SEC:{this.state.seconds}</p>
//       <button onClick={this.Start.bind(this)}>START</button>
//       <button onClick={this.Reset.bind(this)}>RESET</button>
//       </div>
//     );
//   }
//   tick(){
//     let seconds = this.state.seconds;
//     let minutes = this.state.minutes;
//     let hours = this.state.hours;
//       this.setState({seconds: this.state.seconds + 1})
//       if(this.state.seconds > 59){
//         this.setState({
//           minutes: minutes + 1,
//           seconds: 0
//         })
//
//
//       }
//       if(minutes > 59){
//         this.setState({
//           hours: hours + 1,
//           minutes: 0
//         })
//       }
//     }
//
//   Start(){
//       let ticker = setInterval(this.tick(), 1000)
//   }
//   Reset(){
//     if(this.state.seconds > 0 ){
//       this.setState({
//         seconds: 0,
//         minutes: 0,
//         hours: 0,
//       });
//     }else{
//       this.setState({
//         seconds: this.state.seconds
//       });
//     }
//   }
// }
var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      isStart: false,
      elapsed: 0,
      diff: 0,
    };
  },
  componentWillUnmount: function() { // clear timer
    clearInterval(this.state.timer);
    this.setState({timer: undefined});
  },
  tick: function() {
    var elapsed = Date.now() - this.state.start + this.state.diff;
    this.setState({elapsed: elapsed});
  },
  getTimeSpan: function(elapsed) { // 754567(ms) -> "12:34.567"
    var m = String(Math.floor(elapsed/1000/60)+100).substring(1);
    var s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1);
    return m+":"+s;
  },
  onClick: function() {
    if(!this.state.isStart) { // start
      var timer = setInterval(this.tick, 33);
      this.setState({
        isStart: true,
        timer: timer,
        start: new Date(),
      });
    } else { // pause
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
        isStart: false,
        diff: this.state.elapsed,
      });
    }
  },

  reset: function() {
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined,
      isStart: false,
      elapsed: 0,
      diff: 0,
    });
  },
  render: function() {
    return (
      <div className = "StopWatch-container">
        <h1 className = "count-stop-watch">{this.getTimeSpan(this.state.elapsed)}</h1>
        <div className="button-container-stopwatch">
          <button className = "button-stop-watch" onClick={this.onClick}>
            {this.state.isStart ? "pause" : "start"}
          </button>
          <button className = "button-stop-watch" onClick={this.reset} >reset</button>
        </div>
      </div>
    );
  }
});
export default StopWatch
