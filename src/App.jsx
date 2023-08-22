import React, { Component } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
// import ComponentC from './components/ComponentC'
// import { UserProvider } from './UserContext'
// import CounterClick from './components/CounterClick'
// import CounterHover from './components/CounterHover'
// import User from './components/User'
// import Counter from './components/Counter'
// import ClickCounter from './components/ClickCounter'
// import HoverCounter from './components/HoverCounter'


function App() {
  return (
    <div>
      <h1>hello</h1>
      {/* <ClickCounter name="prabhat"></ClickCounter> */}
      {/* <CounterClick></CounterClick>
      <CounterHover></CounterHover> */}
      {/* <User render={(loggedIn)=>loggedIn?"prabhat":"Guest"}></User> */}
      {/* <Counter
      render = {(count, incrementCounter)=>{
       return <CounterClick count={count} incrementCounter={incrementCounter}></CounterClick>
      }}
      ></Counter>
      <Counter
      render = {(count, incrementCounter)=>{
       return <CounterHover count={count} incrementCounter={incrementCounter}></CounterHover>
      }}
      ></Counter> */}

      {/* <UserProvider value="prabhat">
      <ComponentC></ComponentC>
      </UserProvider> */}
    {/* <PostList></PostList> */}
    <PostForm></PostForm>
      

    </div>
  )
}

export default App
