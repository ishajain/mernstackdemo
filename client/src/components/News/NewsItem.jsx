import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const NewsItem = ({ title, description }) => {
  return (
    <li className="collection-item">
      {title} - {description}
    </li>
  )
}

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

NewsItem.defaultProps = {
  title: '',
  description: ''
}
export default NewsItem
