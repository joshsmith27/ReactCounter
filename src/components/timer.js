import React from 'react';

var Timer = React.createClass({
  getInitialState: function() {
    return {
      isStarted: false,
      time: 0,
      sound: document.getElementById('timerAudio'),
      reachedZero: {}
    };
  },
   onInputChange: function(time){
    this.setState({time});
  },
  tick: function(){
    this.setState({time: this.state.time - 1});
    if(this.state.time <= 0){
      this.state.sound.play();
      this.setState({
        reachedZero:{
          color: 'red',
          fontSize: '8vw',
        },
      });
    }
  },
  reset: function(){
    this.state.sound.pause();
    this.setState({
      time: 0,
      reachedZero:{},
      isStarted : false,
    });
    clearInterval(this.state.countDown);
  },
  buzzer: function(){
    if(this.state.time < 1){

    }
  },
  onClick: function(event){
    if(!this.state.isStarted && this.state.time > 0){
      let countDown = setInterval(this.tick ,1000)
      this.setState({
        isStarted : true,
        countDown
      })
    }else {
      clearInterval(this.state.countDown);
      this.state.sound.pause();
      this.setState({
        isStarted : false,
        time: this.state.time,
        reachedZero:{},
      })
    }
  },

    render(){
      return(
        <div className = "timer-container">
          <h1 className="timer-title">Timer</h1>
            <input
              className="time-input"
              style = {this.state.reachedZero}
              onChange={event => this.onInputChange(event.target.value)}
              value = {this.state.time}
              type = "number"/>
            <div className="timer-button-contianer">
              <button className = "timer-buttons" onClick ={this.onClick}>{this.state.isStarted ? "Stop" : "Start"}</button>
              <button className = "timer-buttons"  onClick ={this.reset}>Reset</button>
            </div>
        </div>
      )
    }

});
export default Timer;
