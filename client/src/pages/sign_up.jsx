import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// component to sign a user up within the system
const SignUp = () => {

  const [formData, setFormData] = useState({});  // state for form fields
  const [error, setError] = useState(null);   // state for error with respect to the signup process
  const [loading, setLoading] = useState(false);  // state for displaying loading while signup process is on going
  const navigate = useNavigate();  


  // function to handle change in input fields
  const handleChange = (e) => {    
    setFormData(
      {
        ...formData,
        [e.target.id] : e.target.value,
      }
    );

  }

  
  // function to sign user up 
  const onSubmit =  async(e) => {
    e.preventDefault();   // prevent default behavior in the browser

    try {
      setLoading(true);     // button should display loading and be disabled
      //making http request to auth endpoint from backend
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/profile')

    } catch (error) {
      setLoading(false);
      setError(data.message);
    }
   
    

  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-semibold mb-8'>Sign up</h1>

      <form action="" method='post' className='flex flex-col gap-4' onSubmit={onSubmit}>  {/* signup form */}
        <input className='border-2 p-2 rounded-lg'
         type="text" name="username" id="username" placeholder='Username' onChange={handleChange} /> {/* username field*/}

        <input className='border-2 p-2 rounded-lg'
         type="email" name="username" id="email" placeholder='Email' onChange={handleChange} /> {/* email field */}

        <input className='border-2 p-2 rounded-lg'
         type="password" name="username" id="password" placeholder='Password'  onChange={handleChange}/>  {/* email field*/}
         <button disabled={loading} type="submit" className='bg-slate-800
          text-white p-3 rounded-lg uppercase hover:bg-slate-700 disabled:opacity-80'>{loading ? 'Loading' : 'Sign up'}</button> {/*submit button */}
      </form>

      <div className='flex gap-4 mt-3.5'> {/* switch between signup an sign in*/}
        <p>Have an account</p>
        <Link to='/sign-in' className='text-blue-800 hover:underline'>Sign In</Link>
      </div>
      {error && <p className='text-red-600 mt-6'>{error}</p>}
    </div>
  );
}

export default SignUp