import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
 
 constructor(props) {
   super(props)
 
   this.state = {
      
   }
   console.log("LifecycleA Constructor called");
 }

 static getDerivedStateFromProps(props, state)
 {
     console.log('LifecycyleA getDerivedStateFromProps');
     return null;
 }

 shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate'); 
    return true
 }

 getSnapshotBeforeUpdate(preProps, preState){
     console.log('LifecycleA GetSnapshotBeforeUpdate');
    return null;
 }

 componentDidUpdate(){
     console.log('LifecycleA componentDidUpdate');
 }
 componentDidMount(){
     console.log('LifecycleA componentDidMOunt');
 }

 changeState=()=>{
     this.setState({
         name:'PrabhatDixit'
     })
     console.log('state change');
 }
 
render() {
        console.log('LifecycleA render');
    return (
      <div>
        LifecycleA <br></br>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
