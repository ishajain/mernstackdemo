import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions'
import Loader from '../Loader/Loader'
const Logout = props => {
  useEffect(() => {
    props.logoutUser()
    props.history.push('/')
  }, [props.user])

  return <Loader />
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout)
