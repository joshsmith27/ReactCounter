import React, {Component} from 'react';

import Display from './calcComponents/output_display';
import Numbers from './calcComponents/button_numbers';
import SpecialKeys from './calcComponents/special_keys';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: '',
      allowDecimal: true,
    };
  }
  setInput = (inp) =>{
    var allowFutureDecimal = true;
    switch(inp){
      case"BACK":
      var st = this.state.calc;
      var out = st.substr(0, st.length-1);
      break;

      case "=":
      var out = eval(this.state.calc);
      allowFutureDecimal = true;
      break;

      case ".":
      allowFutureDecimal = false;
      if(this.state.allowDecimal){
        var out = this.state.calc + '.'
      }else {
        var out = this.state.calc
      }
      break;

      case "CLEAR":
        var out = '';
        break;

      default:
      if(inp == "+" || inp == "-" || inp == "*" || inp == "/"){
        allowFutureDecimal = true;
      }
      var out = this.state.calc + '' + inp;

    }
    this.setState({
      calc: out,
      allowDecimal: allowFutureDecimal
    });
  }
  render(){
    return(
      <div className = "calculator-container">
            <Display calc={this.state.calc}/>
            <Numbers _clickHandler={this.setInput}/>
            <SpecialKeys _clickHandler={this.setInput}/>
      </div>
    );
  }
}
export default Calculator
