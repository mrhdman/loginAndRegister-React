import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className='navbar'>
      <a onClick={logout} href='#!'>
        <span>Logout</span>
      </a>
    </div>
  );

  const guestLinks = (
    <div className='navbar'>
      <span>
        <Link to='/register'>Register</Link>
      </span>
      <span>
        <Link to='/login'>Login</Link>
      </span>
    </div>
  );

  return (
    <nav>
      <h1>
        <Link to='/'>Home Page</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
