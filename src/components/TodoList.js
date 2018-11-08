import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const filtered = (todos, activeFilter) => {
  switch(activeFilter) {
    case 'Active':
      return todos.filter(t => !t.complete)
    case 'Complete':
      return todos.filter(t => t.complete)
    default:
      return todos
  }
}

const TodoList = ({ todos, activeFilter }) => (
  <ul>
    {todos.map( t =>
      <Todo key={t.id} {...t} />
    )}
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos, activeFilter: state.filter }
}

export default connect(mapStateToProps)(TodoList)