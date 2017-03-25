import React, {Component} from 'react';
import Button from './button';

class buttonsNumbers extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var _clickHandler = this.props._clickHandler;
    return(
      <section className="calculator-numberButton-Container">
      {this.props.numbers.map(function(b){
        return <Button key={b} text={b} _clickHandler={_clickHandler}/>
      })}
      </section>
    );
  }
}
buttonsNumbers.defaultProps = {
  numbers: [ 1,2,3,"+",4,5,6,"-",7, 8, 9, "*", '.', 0, "=", "/"]   
}
export default buttonsNumbers
