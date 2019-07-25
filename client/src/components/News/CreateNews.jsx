import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNews } from '../../actions'

class CreateNews extends React.PureComponent {
  onFormSubmit = formValues => {
    const { token } = this.props.user
    this.props.addNews({ ...formValues }, token) //By default editing is false
    this.props.history.push('/news')
  }

  renderErrorMessage = ({ error, touched }) => {
    if (error && touched) {
      return <label> {error}</label>
    }
  }

  renderInput = ({ input, placeholder, meta }) => {
    return (
      <div>
        <input {...input} placeholder={placeholder} autoComplete="off" />
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
            <h3>Create News</h3>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="title"
                component={this.renderInput}
                id="icon_title"
                type="text"
                className="validate"
                placeholder="enter title"
              />
              <label htmlFor="icon_title" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="description"
                component={this.renderInput}
                id="icon_description"
                type="text"
                className="validate"
                placeholder="enter description"
              />
              <label htmlFor="icon_description" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <button
                className="btn waves-effect waves-light right"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
            <div className="input-field col s6">
              <Link to="/news" className="red left white-text btn-flat">
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

  if (!formValues.title) {
    errors.title = 'You must enter the valid title.'
  }
  if (!formValues.description) {
    errors.description = 'You must enter the valid description.'
  }

  return errors
}

const formWrapped = reduxForm({
  form: 'CREATE_NEWS_FORM',
  validate
})(CreateNews)

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(
  mapStateToProps,
  { addNews }
)(withRouter(formWrapped))
