import React from 'react'

const WIthCounter = (WrapperComponent, incrementNumber) => {
     class NewComponent extends React.Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          incrementCounter=()=>{
              this.setState((prevCounter)=>{
                  return {count:prevCounter.count+incrementNumber}
              })
          }

         render(){
             return <WrapperComponent 
             count={this.state.count}
             incrementCounter={this.incrementCounter}
             {...this.props}
             >
             </WrapperComponent>
         }
     }
     return NewComponent
}

export default WIthCounter