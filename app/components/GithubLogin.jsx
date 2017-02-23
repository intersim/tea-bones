import React from 'react'

export const GithubLogin = ({ githubLogin }) => (
  <button onClick={githubLogin}>Login with Github</button>
)

import {githubLogin} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {githubLogin},
) (GithubLogin)
