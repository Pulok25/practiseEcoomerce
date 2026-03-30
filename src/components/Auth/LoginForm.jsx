import React from 'react';

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.name.value;
    const password = e.target.password.value;
    console.log(email,password);
    

  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={(e) => {
            handleLogin(e);
          }} >
            <input 
            type="email" 
            placeholder='Enter Your Email' 
            className='input w-full' 
            name='email' />
            <input type="password" 
            placeholder=' ********' 
            className='inpu w-fullt'
             name='password' />
            <button type='submit' className='btn space-y-4 w-full btn-1'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
