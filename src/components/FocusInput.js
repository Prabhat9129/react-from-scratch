import React, { Component } from 'react'
import Input from './InptuRef'

export class FocusInput extends Component {
constructor(props) {
  super(props)

this.focusInput=React.createRef()
}

clickHandler = () => {
this.focusInput.current.focusInput()
}

  render() {
    return (
      <div>
        <Input ref={this.focusInput}></Input>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default FocusInput
