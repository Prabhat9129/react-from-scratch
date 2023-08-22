import React, { Component } from 'react'
import WIthCounter from './WIthCounter'

export class HoverCounter extends Component {

    
    
  render() {

    const{incrementCounter,count}=this.props
    return (
      <div>
        <h1 onMouseOver={incrementCounter}> Hover Counter {count} times</h1>
      </div>
    )
  }
}

export default WIthCounter(HoverCounter)
