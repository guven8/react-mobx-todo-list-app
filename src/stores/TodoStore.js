import { observable, computed } from 'mobx'
import { getId } from '../../utils'

export class Todo {
  id = getId()
  @observable title;
  @observable completed = false;
  constructor(store, title) {
    this.store = store
    this.title = title
  }
  changeTitle(newTitle) {
    this.title = newTitle
  }
  complete() {
    this.completed = !this.completed
  }
  destroy() {
		this.store.todos.remove(this);
	}
}

export class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.completed).length
  }
  addTodo(title) {
    this.todos.push(new Todo(this, title))
  }
}