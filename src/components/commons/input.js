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
      <div className="input-group">
				<input
					type='text'
					className="input-group__field"
					value={this.state.text}
					placeholder={this.props.placeholder}
					onChange={e => this.handleChange(e.target.value)}
				/>
				<button
					className="input-group__button"
					onClick={this.handleClick}
				>{this.props.buttonText}</button>
			</div>
    );
  }
}

export default Input;
