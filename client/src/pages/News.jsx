import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NewsList from '../components/News/NewsList'
import Loader from '../components/Loader/Loader'
import { getNews } from '../actions'
import { isEmpty } from '../helper'
class News extends React.PureComponent {
  componentDidMount() {
    const { getNews: getNewsFromServer, user } = this.props
    getNewsFromServer(user.token)
  }

  render() {
    const { news } = this.props
    return (
      <Fragment>
        <h2>News</h2>
        {isEmpty(news) && <Loader />}
        {!isEmpty(news) && news.length > 0 ? (
          <NewsList items={news} />
        ) : (
          <h5>
            You do not have any news, Please click the add button to add news...
          </h5>
        )}
        <div className="fixed-action-btn">
          <Link to="/news/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ news, user }) => {
  return { news: Object.values(news), user }
}
export default connect(
  mapStateToProps,
  { getNews }
)(News)

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  getNews: PropTypes.func.isRequired
}

News.defaultProps = {
  news: null
}
