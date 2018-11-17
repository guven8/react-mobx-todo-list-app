import React, { Component } from 'react'

export class TodoInput extends Component {
  constructor() {
    super()
    this.state = {
      newTodo: ''
    }
  }

  updateNewTodo = e => {
    this.setState({ newTodo: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  render() {
    return (
      <form className="todo-app__form" onSubmit={this.onSubmit}>
        <input
          className="todo-app__input"
          type="text"
          placeholder="enter a new todo..."
          value={this.state.newTodo}
          onChange={this.updateNewTodo}
        />
      </form>
    )
  }
}
