import React, { Component } from 'react'
import './Login.css'
import './Signup'


export class Login extends Component {
  render() {
    return (
        
      <div className='log'>

          <div className='login'>Login</div>
          <div className='get'>Get started with Ckare</div>
          
        <div className='phonebox'>
           
             <div className='flg'>
                <div className='flgtop'></div>
                <div className='flgmid'></div>
                <div className='flgbot'></div>
                </div>

                <div className='ninetyone'>+91</div>
                <div className='line'></div>
                <input type='text' className='phno' placeholder='Phone number'/>
              
        </div>
            <button type='submit' className='otp'>
                <div className='sendotp'>Send OTP</div>
            </button>

            <div className='lineone'></div>
            <div className='or'>or</div>
            <div className='linetwo'></div>

        <button className='fam1'>
            <div className='google'></div>
            <div className='contgoogle'>Continue with Google</div>
            


        </button>
        
        <button className='fb'>
            <div className='facebook'></div>
            <div className='contfb'>Continue with Facebook</div>

        </button>
        <div className='linethree'></div>
    
        
        <div className='newacc' >

          New to Ckare? <span className='ca'>Create account</span>
          
          </div>
        
        
        </div>
      
    )
  }
}

export default Login