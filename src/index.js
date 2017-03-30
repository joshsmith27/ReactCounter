import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import Clock from './components/clock';
import Timer from './components/timer';
import StopWatch from './components/stop_watch';
import Calculator from './components/calculator/calculator';
const App = () =>{

  return(
    <div>
      <div className="title"> <img className="title-image" src = "src/components/images/react.svg"/></div>

      <div className = "components-container">
        <div className="component-container">
          <Counter/>
        </div>
        <div className="component-container">
          <Calculator/>
        </div>
      </div>
      <div className = "components-container">
        <div className="component-container">
          <Clock/>
        </div>
        <div className="component-container">
          <StopWatch/>
        </div>
      </div>
      <div className = "components-container">
        <div className="component-container">
          <Timer/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
