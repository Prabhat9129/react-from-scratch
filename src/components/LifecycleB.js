import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }

    console.log('LifecycleB Constructor');
  }


  static getDerivedStateFromProps(props, state)
  {
      console.log(`LifecycycleB getDerivedFromProps `);
      return null;
  }

  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate'); 
    return true
 }

 getSnapshotBeforeUpdate(preProps, preState){
     console.log('LifecycleB GetSnapshotBeforeUpdate');
     return null;
 }

 componentDidUpdate(){
     console.log('LifecycleB componentDidUpdate');
 }

  componentDidMount(){
      console.log('LifecycleB componentDidMount');
  }
  
    render() {
    console.log('LifecycleB render');
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB

