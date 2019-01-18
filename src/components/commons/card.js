import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div className="c-card">
        <div className="c-card__head">
          <h2 className="c-card__title">{this.props.title}</h2>
        </div>
        <div className="c-card__body">
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default Card
