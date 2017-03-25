import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Counter extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      amount: 5,
    };
  }
  onIncreaseButtonClicked(event){
    this.setState({count: this.state.count + this.state.amount});
  }
  onDecreaseButtonClicked(event){
    this.setState({count: this.state.count - this.state.amount});
  }
  setZero(event){
    this.setState({
      count: 0,
      amount: 5,
    });
  }
  increaseAmount(event){
    this.setState({amount: this.state.amount + 1});
  }
  decreaseAmount(event){
    if(this.state.amount > 1){
      this.setState({amount: this.state.amount - 1});
    }else {
      this.setState({amount: this.state.amount});
    }
  }
  render(){

    return(
      <div className = "counter-container">
        <h1 className = "Count">Count: {this.state.count}</h1>
        <div className = "button-container">
          <button className="button" type="button" onClick={this.onIncreaseButtonClicked.bind(this)}>
          +{this.state.amount}
          </button>
          <button className="button"  type="button" onClick={this.onDecreaseButtonClicked.bind(this)}>
          -{this.state.amount}
          </button>
        </div>
          <div className = "button-container" id="amount-button-container">
            <button className="button" type="button" onClick={this.increaseAmount.bind(this)}>+</button>
            <button className="button" type="button" onClick={this.decreaseAmount.bind(this)}>-</button>
          </div>
        <div className='Set-To-Zero-Container'>
          <button  className="button" id= "set-To-Zero" type = "button" onClick={this.setZero.bind(this)}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
