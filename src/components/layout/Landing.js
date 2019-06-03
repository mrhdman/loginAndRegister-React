import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <h1>-------</h1>
      <p>Create an account.</p>
      <div className='buttons'>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    </section>
  );
};

export default Landing;
