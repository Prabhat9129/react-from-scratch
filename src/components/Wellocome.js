import React, { Component } from 'react'

class Wellcome extends Component{
    render(){
        const {name,children}=this.props;
        return(
            <div>
                <h1>Hello  class Component from {name}</h1>
                {children}
            </div>
        )
    }
}

export default Wellcome;