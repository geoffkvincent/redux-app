import React from 'react'
import { connect } from 'react-redux'

class TodoForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', todo: this.state.name})
    this.setState({name: ''})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render () {
    const { name } = this.state
    return (
      <div>
        <h3>Add a Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={name}
            onChange={this.handleChange}
            required
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(TodoForm)