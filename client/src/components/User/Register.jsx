import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { createUser } from '../../actions'

class Register extends Component {
  onFormSubmit = async formValues => {
    const user = await this.props.createUser({ ...formValues }) //By default editing is false
    this.props.history.push('/')
  }

  renderErrorMessage = ({ error, touched }) => {
    if (error && touched) {
      return <label> {error}</label>
    }
  }

  renderInput = ({ input, type, placeholder, meta }) => {
    return (
      <div>
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
        />
        {this.renderErrorMessage(meta)}
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        <form
          className="col s12"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <div className="row">
            <h3>Registration</h3>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="name"
                component={this.renderInput}
                id="icon_name"
                type="text"
                className="validate"
                placeholder="enter name"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="email"
                component={this.renderInput}
                id="icon_email"
                type="email"
                className="validate"
                placeholder="enter email"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="password"
                component={this.renderInput}
                id="icon_password"
                type="password"
                className="validate"
                placeholder="enter password"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="confirmpassword"
                component={this.renderInput}
                id="icon_confirmpassword"
                type="password"
                className="validate"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <button
                className="btn waves-effect waves-light right"
                type="submit"
                name="action"
              >
                Create
                <i className="material-icons right">send</i>
              </button>
            </div>
            <div className="input-field col s6">
              <Link to="/" className="red left white-text btn-flat">
                Cancel
                <i className="material-icons left">cancel</i>
              </Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.name) {
    errors.name = 'You must enter the valid name.'
  }
  if (!formValues.email) {
    errors.email = 'You must enter the valid email.'
  }
  if (!formValues.password) {
    errors.password = 'You must enter the valid password.'
  }
  if (!formValues.confirmpassword) {
    errors.confirmpassword = 'You must enter the same confirm password.'
  }

  return errors
}

const formWrapper = reduxForm({
  form: 'REGISTER_USER',
  validate
})(Register)

export default connect(
  null,
  { createUser }
)(formWrapper)
