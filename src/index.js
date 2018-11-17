import React from 'react'
import ReactDOM from 'react-dom'
// import { Counter } from './components/Counter'
// import { CounterStore } from '../src/stores/CounterStore'
import { TodoApp } from './components/TodoApp'
import { TodoList, Todo } from './stores/TodoStore'
import './styles/index.css'

const store = new TodoList()
// store.todos.push(
//   new Todo("Get Coffee"),
//   new Todo("Write simpler code")
// );

const App = () => {
  return (
    <div className="app">
      {/* <Counter store={CounterStore} />
    <br /> <hr/> */}
      <TodoApp todoList={store} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
