// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css'

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <img src={logo} className='App-logo' alt='Todo' width="100" height="100" />
        <h1 className='app-title'>
        ToDo App
        </h1>
        <div className='container'>
        Add an item..<br/>
        <input
        type='text'
        className='input-text'
        placeholder='write a ToDo'
        />
        <button className='add-item'>Add Todo</button>
        <div className='list'>
          <ul>
            <li>
              <input
              type="checkbox"
              name=''
              id=''
              />Record youtube videos
              <button className='btn'>Delete</button>
            </li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}

export default App;