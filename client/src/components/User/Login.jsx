import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions'

class Login extends React.Component {
  onFormSubmit = async formValues => {
    const user = await this.props.loginUser({ ...formValues })
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
            <h3>Login</h3>
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
              <label htmlFor="icon_email" />
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
            <div className="input-field col s6">
              <button
                className="btn waves-effect waves-light right"
                type="submit"
                name="action"
              >
                Login
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

  if (!formValues.email) {
    errors.email = 'You must enter the valid email.'
  }
  if (!formValues.password) {
    errors.password = 'You must enter the valid password.'
  }

  return errors
}

const formWrapped = reduxForm({
  form: 'LOGIN_FORM',
  validate
})(Login)

export default connect(
  null,
  { loginUser }
)(formWrapped)
