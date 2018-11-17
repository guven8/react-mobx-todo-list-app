import React from 'react'
import ReactDOM from 'react-dom'
import { TodoApp } from './components/TodoApp'
import { TodoList, Todo } from './stores/TodoStore'
import './styles/index.css'

const store = new TodoList()

const App = () => {
  return (
    <div className="app">
      <TodoApp todoList={store} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
