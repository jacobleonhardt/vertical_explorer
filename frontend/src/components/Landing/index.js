import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../images/vertical_explorer_logo-transparent.png';
import './Landing.css';

function Landing() {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const loginClick = (e) => {
    e.preventDefault();
    history.push('/login')
  };

  const joinClick = (e) => {
    e.preventDefault();
    history.push('/signup')
  };

  return (
    <div className='landing-page'>
        <img src={logo} alt="Vertical Explorer Logo" />
        <h1>Ready to Explore the Vertical?</h1>
        <button onClick={(e) => loginClick(e)}>Login<i class="fas fa-sign-in-alt"></i></button>
        <button onClick={(e) => joinClick(e)}>Join<i class="fas fa-user-plus"></i></button>
    </div>
  );
}

export default Landing;
