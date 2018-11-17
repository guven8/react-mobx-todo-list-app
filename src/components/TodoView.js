import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export class TodoView extends Component {
  constructor() {
    super()
    this.state = { editMode: false }
  }

  toggleEditMode = e => {
    e.preventDefault()
    this.setState({ editMode: !this.state.editMode })
  }

  changeTitle = e => {
    this.props.todo.changeTitle(e.target.value)
  }

  completeTodo = () => {
    this.props.todo.complete()
  }

  deleteTodo = () => {
    this.props.todo.destroy()
  }

  render() {
    const { todo } = this.props
    return (
      <li key={todo.id} className="todo-app__list-item">
        <input type="checkbox" checked={todo.completed} onChange={this.completeTodo} />
        <form className="todo-app__edit-form" onSubmit={this.toggleEditMode}>
          <input
            className={`todo-app__edit-form-input ${this.state.editMode ? 'editing' : ''}`}
            type="text"
            disabled={!this.state.editMode}
            value={todo.title}
            onChange={this.changeTitle}
          />
        </form>
        <div className="todo-app__actions">
          <button onClick={this.toggleEditMode}>edit</button>
          <button onClick={this.deleteTodo}>delete</button>
        </div>
      </li>
    )
  }
}
