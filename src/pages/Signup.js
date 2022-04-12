import React, { Component } from 'react'
import './Signup.css'

export class Signup extends Component {
  render() {
    return (
      <div className='signup'>
          <div className='sig'>Sign up</div>
          <div className='get'>Get started with Ckare</div>
          <input type='text' className='name' placeholder='Full Name' >
             
          </input>
          <input type='email' className='email' placeholder='E-mail' >
             
          </input>
          <input type='checkbox' className='cheak' >
             
          </input>
          <div className='agree'>I agree to Ckare’s <span className='red'>Terms & Conditions, Privacy Policy</span></div>

          <button className='cracc'>
              <span className='createaccounttext'>Create account</span>

          </button>
          
          <button className='google1'>
            <div className='google'></div>
            <div className='contgoogle'>Continue with Google</div>
            


        </button>

        <button className='fb1'>
            <div className='facebook'></div>
            <div className='contfb'>Continue with Facebook</div>

        </button>
          <div className='ahaccount'>Already have an account? <span className='lin'>Log in</span></div>


      </div>
    )
  }
}

export default Signup