import React from 'react'
import { connect } from 'react-redux'

const FilterLink = ({activeFilter, dispatch, children}) => {
  if (children === activeFilter)
    return
}

const mapStateToProps = (state) => {
  return { avtiveFilter: state.filter }
}

export default connect(mapStateToProps)(FilterLink)