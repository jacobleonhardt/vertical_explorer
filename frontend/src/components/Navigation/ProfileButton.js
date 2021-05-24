import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className='profileBtn' onClick={openMenu}>
        <i class="fas fa-bars"></i>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <Link to='#'><i class="fas fa-plus"></i> Route</Link><br/>
          <Link to='#'><i class="fas fa-hand-rock"></i> Climb</Link><br/>
          <Link to='/settings'><i class="fas fa-cog"></i>Settings</Link><br/>
          <button className='logoutBtn' onClick={logout}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
