import React, {Component} from 'react';
import Button from './button';

class SpecialKeys extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var  _clickHandler = this.props._clickHandler;
    return(
      <section className="Special-Keys-Container">
      {this.props.SpecialKeys.map(function(b){
        return <Button key={b} text={b} className="SpecialKeys" _clickHandler={_clickHandler}/>
      })}
      </section>
    );
  }
}

SpecialKeys.defaultProps = {
  SpecialKeys: ["CLEAR", "BACK"]
}
export default SpecialKeys
