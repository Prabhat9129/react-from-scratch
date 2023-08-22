import React, { Component } from 'react'

export class CounterHover extends Component {

    render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCounter}>Hover {this.props.count} time </h1>
      </div>
    )
  }
}

export default CounterHover
