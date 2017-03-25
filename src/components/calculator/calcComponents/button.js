
import React, {Component} from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}

	_handleClick = () => {
		var val = this.props.text;
		this.props._clickHandler.call(null, val);
	}

	render() {
		var { _clickHandler, text, ...classes } = this.props;
		return <button className = "calculator-buttons" onClick={this._handleClick} {...classes} data-val={text}>{text}</button>;
	}
}
