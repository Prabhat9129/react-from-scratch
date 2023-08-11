import React,{Component} from "react";

class classClick extends Component {
    
    onClickHandler(){
        return console.log('button clicked');
    }

    render(){
        return(
            <div>
                <button onClick={this.onClickHandler}>Click me</button>
            </div>
        )
    }
}

export default classClick