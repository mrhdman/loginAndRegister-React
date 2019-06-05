import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <h1>LANDING PAGE</h1>
      <div className='signUpLogInBox'>
        <Link to='/register'>New User? REGISTER</Link>
        <div />
        <Link to='/login'>Already have an account? LOGIN</Link>
      </div>
    </section>
  );
};

export default Landing;
