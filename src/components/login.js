import React from 'react'
import { connect } from 'react-redux'
import { getToken } from '../redux/actions'


function mapDispatchToProps(dispatch) {
  return {
    getToken: () => dispatch(getToken())
  }
}

const ConnectedLogin = ({getToken}) => (
  <button onClick={getToken}>Log in</button>
)

const Login = connect(null, mapDispatchToProps)(ConnectedLogin)

export default Login;