import React, { useState } from 'react';
import { login } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../images/vertical_explorer_logo-transparent.png';
import './Landing.css';

function Landing() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);


  const loginClick = (e) => {
    e.preventDefault();
    history.push('/login')
  };

  const joinClick = (e) => {
    e.preventDefault();
    history.push('/signup')
  };

  const loginDemo = (e) => {
    e.preventDefault();
    setErrors([]);

    const userCredentials = { credential: 'Rocky', password: 'password' };

    return dispatch(login(userCredentials))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='landing-page'>
        <img src={logo} alt="Vertical Explorer Logo" />
        <h1>Ready to Explore the Vertical?</h1>
        <button onClick={(e) => loginClick(e)}>Login<i class="fas fa-sign-in-alt"></i></button>
        <button onClick={(e) => joinClick(e)}>Join<i class="fas fa-user-plus"></i></button>
        <Link onClick={loginDemo} className='link-to'>Login as Demo <i class="fas fa-chevron-right"></i></Link>
    </div>
  );
}

export default Landing;
