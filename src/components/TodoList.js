import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

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