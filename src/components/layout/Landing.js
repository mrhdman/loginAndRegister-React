import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <h1>LANDING PAGE</h1>
      <p>Create an account.</p>
      <div>
        <Link to='/register'>Sign Up</Link>
        <div />
        <Link to='/login'>Login</Link>
      </div>
    </section>
  );
};

export default Landing;
