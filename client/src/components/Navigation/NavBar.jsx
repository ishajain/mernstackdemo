import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions'
import { isEmpty } from '../../helper'

const NavBar = ({ user }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Logo
        </NavLink>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!isEmpty(user) && (
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          {isEmpty(user) ? (
            <Fragment>
              <li>
                <NavLink to="/register">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Sign In</NavLink>
              </li>
            </Fragment>
          ) : (
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar)
