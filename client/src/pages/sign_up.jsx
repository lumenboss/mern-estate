import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-semibold mb-8'>Sign up</h1>
      <form action="" method='post' className='flex flex-col gap-4'>
        <input className='border-2 p-2 rounded-lg'
         type="text" name="username" id="username" placeholder='Username' />
        <input className='border-2 p-2 rounded-lg'
         type="email" name="username" id="email" placeholder='Email' />
        <input className='border-2 p-2 rounded-lg'
         type="password" name="username" id="password" placeholder='Password' />
         <button type="submit" 
         className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:bg-slate-700 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-4 mt-3.5'>
        <p>Have an account</p>
        <Link to='/sign-in' className='text-blue-800 hover:underline'>Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp