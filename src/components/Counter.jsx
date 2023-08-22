import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
           count:0
        }
      }
    
      incrementCounter=()=>{
          this.setState((prevCount)=>{
            return {count:prevCount.count+1}
          })
      }

  render() {
    return (
      <div>
          {this.props.render(this.state.count,this.incrementCounter)}
      </div>
    )
  }
}

export default Counter
