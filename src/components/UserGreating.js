import React, { Component } from 'react'

export class UserGreating extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  


    render() {
        //1 Approach using short surcit operator
        return this.state.isLoggedIn && <div>Wellcome Prabhat</div>

        //2 Approach using Conditional operator
        // return this.state.isLoggedIn ? 
        // (<div>Wellocome Prabaht</div>
        // ):(
        // <div>Wellocome Guest</div>
        // )

        //4 Approach using variable
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Wellcome Prabaht</div>
        // }
        // else{
        //     message=<div>Wellcome Guest</div>
        // }
        // return <div>{message}</div>

        //5 Approach using If else condition.
        // if(this.state.isLoggedIn)
        // {
        //     return <div>Wllocome Prabhat</div>
        // }
        // else
        // {
        //     return <div>Wellcome Guest</div>
        // }

    // return (
    //   <div>
    //       <div>Wellocome prabhat</div>
    //       <div>Wellocome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreating
