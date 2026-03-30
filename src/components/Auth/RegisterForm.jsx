import React from 'react'
import { Link } from 'react-router';

const RegisterForm = () => {
    const handleLogin = (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
  return (
   <div className='max-w-lg mx-auto shadow-2xl p-12 mt-8'>
      <h1 className='text-4xl font-bold text-center py-4'>Register a new user</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={(e) => {
            handleLogin(e);
          }} className='grid grid-cols-1 gap-4' >
            <input 
            type="text" 
            placeholder='Enter Your Name' 
            className='input w-full' 
            name='name' />
            <input type="email" 
            placeholder=' email' 
            className='input w-full'
             name='email' />
            <input type="password" 
            placeholder='********' 
            className='input w-full'
             name='password' />
            <button type='submit' className='btn space-y-4 w-full btn-active'>Register</button>
          </form>
          <p>
            If you  have an account. please{" "}
            <Link to={'/login'} className='text-blue-600'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
