import React, { Component } from 'react'

export class CounterClick extends Component {
    render() {
  
    return (
      <div>
          <button onClick={this.props.incrementCounter}>clicked buttton {this.props.count} times</button>
      </div>
    )
  }
}

export default CounterClick
