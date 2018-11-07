import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map( t =>
      <li key={t.id}>
        {t.name}
      </li>  
    )}
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList)