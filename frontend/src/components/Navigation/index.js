import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Join</NavLink>
      </>
    );
  }

  return (
      <div className={sessionUser ? 'navbar' : 'hide'}>
        <NavLink exact to="/">Profile</NavLink>
        {isLoaded && sessionLinks}
      </div>
  );
}

export default Navigation;
