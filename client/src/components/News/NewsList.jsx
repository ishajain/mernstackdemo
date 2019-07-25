import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

const NewsList = ({ items }) => {
  return (
    <Fragment>
      {items.length > 0 && (
        <ul className="collection">
          {items.map(news => (
            <NewsItem {...news} key={news._id} />
          ))}
        </ul>
      )}
    </Fragment>
  )
}

NewsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
}
NewsList.defaultProps = { items: [] }
export default NewsList
