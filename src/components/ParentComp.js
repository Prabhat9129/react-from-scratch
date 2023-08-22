import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:'prabhat'
        }
      }

      componentDidMount(){
          setInterval(()=>{
              this.setState({
                  name:'prabhatd'
              })
          },2000)
      }

    render() {

    console.log("==================Parent Component =================")
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <PureComp name={this.state.name}></PureComp>
        <RegularComp name={this.state.name}></RegularComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
