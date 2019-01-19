import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchPhoto } from '../redux/actions'

function mapDispatchToProps (dispatch) {
  return {
    searchPhoto: query => dispatch(searchPhoto(query))
  }
}

class ConnectedSearch extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleSubmit () {
    this.props.searchPhoto(this.state.value)
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Hello</button>
      </div>
    )
  }
}

const Search = connect(null, mapDispatchToProps)(ConnectedSearch)

export default Search