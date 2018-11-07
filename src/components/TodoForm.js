import React from 'react'

class TodoForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    //stuff
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

export default TodoForm