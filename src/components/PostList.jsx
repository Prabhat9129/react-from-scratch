import React, { Component } from 'react'
import Axios from 'axios'
import axios from 'axios'
 
export class PostList extends Component {
constructor(props) {
  super(props)

  this.state = {
     List : []
  }
}

componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    this.setState({List:response.data})

}).catch((error)=>{
    console.log(error);

})
}


  render() {
    return (
      <div>
        Post List 
        {this.state.List.map((item)=>{
            console.log(item);
            return item?<div>{item.title}</div>:<div>error</div>
        })}
      </div>
    )
  }
}

export default PostList
