import { observable } from 'mobx'

export const CounterStore = observable({
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  }
})