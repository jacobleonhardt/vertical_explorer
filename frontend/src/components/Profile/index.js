import React, { useEffect, useState } from 'react';
import { getClimbs } from '../../store/climb';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const prevClimbs =  useSelector(state => state.climbs);

  console.log('///', prevClimbs)
  useEffect(() => {
    return dispatch(getClimbs());
  }, [])

  return (
    <div>
      <div className='profile-content'>
        <div className='greeting'>
          <h2><span>{sessionUser.username}</span></h2>
          <h3>Total Climbed: <span>{sessionUser.total_climbed ? sessionUser.total_climbed : '0'}</span> ft</h3>
        </div>
      </div>
      <div className='prev-climbs'>
        <h4>Recent Climbs</h4>
        {prevClimbs.map(climb => {
          return (
            <div className='climb-card'>
              <h4>{climb.name}</h4>
              <h5>{climb.climb_height}</h5>
              {climb.note ? <p>{climb.note}</p> : null}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Profile;
