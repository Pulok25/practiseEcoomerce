import React from 'react';
import { Link } from 'react-router';

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({email, password});
    

  };
  return (
    <div className='max-w-lg mx-auto shadow-2xl p-12 mt-8'>
      <h1 className='text-4xl font-bold text-center py-4'>Login</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={(e) => {
            handleLogin(e);
          }} className='grid grid-cols-1 gap-4' >
            <input 
            type="email" 
            placeholder='Enter Your Email' 
            className='input w-full' 
            name='email' />
            <input type="password" 
            placeholder=' ********' 
            className='input w-full'
             name='password' />
            <button type='submit' className='btn space-y-4 w-full btn-active'>Login</button>
          </form>
          <p>
            If you don't have an account. please{" "}
            <Link to={"/register"} className='text-blue-500'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
