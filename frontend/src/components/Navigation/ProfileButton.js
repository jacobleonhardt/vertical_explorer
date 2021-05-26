import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

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
    history.push('/');
  };

  return (
    <>
      <button className='profileBtn' onClick={openMenu}>
        <i class="fas fa-bars"></i>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <Link to='/routes'><i class="fas fa-route"></i> Routes</Link><br/>
          <Link to='/climbs'><i class="fas fa-hand-rock"></i> Climbs</Link><br/>
          <Link to='/settings'><i class="fas fa-cog"></i> Settings</Link><br/>
          <button className='logoutBtn' onClick={logout}>Logout</button>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
