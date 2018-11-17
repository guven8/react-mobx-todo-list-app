import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {this.props.store.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    )
  }

  handleInc = () => {
    this.props.store.increment()
  }

  handleDec = () => {
    this.props.store.decrement()
  }
}