import React, { Component } from 'react';

class Input extends Component {

	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange(value) {
		this.setState({text: value})
	}

	handleClick() {
		this.props.response(this.state.text)
	}

  render() {
    return (
      <div>
				<input
					type='text'
					value={this.state.text}
					onChange={e => this.handleChange(e.target.value)}
				/>
				<button
					onClick={this.handleClick}
				>{this.props.text}</button>
			</div>
    );
  }
}

export default Input;
