import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import Clock from './components/clock';
import Calculator from './components/calculator/calculator'
const App = () =>{

  return(
    <div>
      <div className = "components-container">
        <div className="component-container">
          <Counter/>
        </div>
        <div className="component-container">
          <Clock/>
        </div>
      </div>
      <div className = "components-container">
        <div className="component-container">
          <Calculator/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
