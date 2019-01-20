import React from 'react'
import { connect } from 'react-redux'
import { getLoginCode } from '../redux/actions'


function mapDispatchToProps(dispatch) {
  return {
    getLoginCode: () => dispatch(getLoginCode())
  }
}

const ConnectedLogin = ({getLoginCode}) => (
  <button onClick={getLoginCode}>Log in</button>
)

const Login = connect(null, mapDispatchToProps)(ConnectedLogin)

export default Login;