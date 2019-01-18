import React, { Component } from 'react'

class PhotoCard extends Component {
	
	render() {
		return (
			<div className="o-card c-photocard">
				<img
					className="c-photocard__img"
					src={this.props.img}
					alt={this.props.text}
				/>
				<h3 className="c-photocard__text">{this.props.text}</h3>
			</div>
		)	
	}
}

export default PhotoCard;
