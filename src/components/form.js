import React, { Component } from 'react'

export class form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       comments:'',
       topic:'react'
    }
  }
  
  handleUserNameChange=(event)=>{
    this.setState({
      username: event.target.value   
    })
  }

  handleCommentsChange=(event)=>{
    this.setState({
      comments: event.target.value   
    })
  }

  handleTopicChange=(event)=>{
    this.setState({
      topic: event.target.value   
    })
  }

  handleSubmit=(event)=>{
      alert(`${this.state.username} , ${this.state.comments} , ${this.state.topic}` )
  }
  
  render() {
    return (
      
        <form onSubmit={ this.handleSubmit}>
          <div>
          <label>User name</label>
          <input 
          type="text" 
          value={this.state.username} 
          onChange={this.handleUserNameChange}
          >
          </input>
          </div>
          
          <div>
          <label>Comments</label>
          <textarea
          type="text" 
          value={this.state.comments} 
          onChange={this.handleCommentsChange}
          />
          </div>
          
          <div>
          <label>Topic</label>
          <select 
          value={this.state.topic} 
          onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
          </div>

          <div>
            <button >
              submit
            </button>
          </div>
        </form>
        
    )
  }
}

export default form
