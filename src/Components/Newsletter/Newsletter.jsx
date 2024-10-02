import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Email</h1>
        <p>Subscribe to our Newsletter and Stay Updated</p>
        <div className='subscription'>
            <input type="email" placeholder='Your Email id' />
             <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
