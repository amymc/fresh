import React from 'react';
import './../styles/login.css';

const Login = (props) => {
  return (
    <form className='login' onSubmit={props.onSubmit}>
      <h1 className='login__title'>
        Login
      </h1>
      <button className='login__close' onClick={props.onClick}>
        X
      </button>
      <label className='login__label'>
        <span>Email address: </span>
        <input className='login__input' type='email' name='email address' required />
      </label>
      <label className='login__label'>
        <span>Password: </span>
        <input className='login__input' type='password' name='password' required />
      </label>
      <button type='submit'>
        Login
      </button>
    </form>
  )
}

export default Login;
