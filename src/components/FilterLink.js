import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filter'

const styles = {
  link: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  }
}

const FilterLink = ({activeFilter, dispatch, children}) => {
  if (children === activeFilter) {
    return (
      <span>{children}</span>
    )
  } else {
    return (
      <span
        style={styles.link}
        onClick={() => dispatch(setFilter(children)) }
      >
        {children}
      </span>
    )
  } 
}

const mapStateToProps = (state) => {
  return { activeFilter: state.filter }
}

export default connect(mapStateToProps)(FilterLink)