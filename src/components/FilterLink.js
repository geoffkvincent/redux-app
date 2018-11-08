import React from 'react'
import { connect } from 'react-redux'

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
        onClick={() => dispatch({ type: 'SET_FILTER', filter: children }) }
      >
        {children}
      </span>
    )
  } 
}

const mapStateToProps = (state) => {
  return { avtiveFilter: state.filter }
}

export default connect(mapStateToProps)(FilterLink)