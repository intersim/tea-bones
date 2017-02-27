import React from 'react'

export const GoogleLogin = ({ googleLogin }) => (
  <a href="/api/auth/google/login">Login with Google</a>
)

import {googleLogin} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {googleLogin},
) (GoogleLogin)
