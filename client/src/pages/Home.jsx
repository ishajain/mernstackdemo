import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isEmpty } from '../helper'
const Home = ({ user }) => {
  return isEmpty(user) ? (
    <Fragment>
      <h2>Welcome Guest</h2>
      <h5>
        Please click <Link to="/register">'Sign Up'</Link> to register, if you
        have already registerd, please click <Link to="/login">'Sign In'</Link>.
      </h5>
    </Fragment>
  ) : (
    <Fragment>
      <h2>Welcome, {user.name}</h2>
      <h5>
        You can now add news, please click <Link to="/news">'News'</Link>
      </h5>
    </Fragment>
  )
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(
  mapStateToProps,
  {}
)(Home)
