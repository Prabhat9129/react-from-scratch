import React, { Component } from 'react'

class ClassCounterOne extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }

    clickHandler=()=>{
        this.setState(prevCount=>{
         return {count:prevCount.count + 1}
        })
    }
    
    componentDidMount(){
      // console.log(this.state.count);
      document.title=`Click count is ${this.state.count}`
    }

    componentDidUpdate(prevProp,preState){
      if(preState.count!==this.state.count){
        console.log('component updating');
        document.title=`Click count is ${this.state.count}`
      }
    }

  

    render() {
    return (
      <div>
          <input 
          type="text"
          name='name'
          value={this.state.name}
          onChange={e=>{
            this.setState({name:e.target.value})
          }}
          ></input>
          <button onClick={this.clickHandler}>Click count is {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterOne
