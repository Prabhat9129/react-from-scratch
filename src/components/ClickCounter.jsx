import React, { Component } from 'react'
import WIthCounter from './WIthCounter'

export class ClickCounter extends Component {

    render() {
        const {incrementCounter,count}=this.props
    return (
      <div>
        <button onClick={incrementCounter}> {this.props.name} Clicked {count} times</button>
      </div>
    )
  }
}

export default WIthCounter(ClickCounter,10)
