import './scss/main.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './components/login'
import { silentLogin, debug } from './redux/actions'

const mapStateToProps = state => {
	return {
		test_value: state.test_value
	}
}

function mapDispatchToProps(dispatch) {
	return {
		silentLogin: () => dispatch(silentLogin()),
		debug: () => dispatch(debug())
	}
}

class ConnectedApp extends Component {
	componentDidMount () {
		this.props.silentLogin()
	}
	render () {
		return (
			<div>
				
			</div>
		)
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default App;
