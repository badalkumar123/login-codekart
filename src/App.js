import React, { Component } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'



export class App extends Component {
  render() {
    return (
      <div>
        
        {/* <Signup/> */}
        <Login/>
        
      </div>
    )
  }
}

export default App