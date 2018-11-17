import React, { Component } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react'
import { TodoInput } from './TodoInput'
import { TodoView } from './TodoView'

@observer
export class TodoApp extends Component {
  updateTodos = newTodo => {
    this.props.todoList.addTodo(newTodo)
  }

  render() {
    autorun(() => {
      console.log('Tasks left: ' + this.props.todoList.unfinishedTodoCount)
    })
    return (
      <div className="todo-app">
        <h1 className="todo-app__heading">todos</h1>
        <TodoInput onSubmit={this.updateTodos} />
        <ul className="todo-app__list">
          {this.props.todoList.todos.map(todo => <TodoView key={todo.id} todo={todo} />)}
        </ul>
        {!!this.props.todoList.todos.length && (
          <p className="todo-app__unfinished">
            unfinished todos: {this.props.todoList.unfinishedTodoCount}
          </p>
        )}
      </div>
    )
  }
}
