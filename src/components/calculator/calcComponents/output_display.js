import React, {Component} from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className = "display-container">
        <input className = "display" placeholder = "0" value = {this.props.calc}/>
      </div>
    );
  }
}
export default Display
