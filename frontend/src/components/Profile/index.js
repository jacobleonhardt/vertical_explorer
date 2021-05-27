import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClimbs } from '../../store/climb';
import { getRoutes } from '../../store/route';
import { getTypes } from '../../store/type';
import ClimbCard from '../ClimbCard';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let prevClimbs = useSelector(state => state.climbs);

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getRoutes());
    return dispatch(getClimbs());
  }, [])

  return (
    <div>
      <div className='profile-content'>
        <div className='greeting'>
          <h2><span>{sessionUser.username}</span></h2>
          <h3><i class="fas fa-mountain"></i> <span>{sessionUser.total_climbed ? sessionUser.total_climbed : '0'}</span> ft</h3>
        </div>
      </div>
      <div className='prev-climbs'>
        <h4>Recent Climbs</h4>
         {prevClimbs.length > 0 ? prevClimbs.map((climb) => <ClimbCard climb={climb} key={climb.id}/>) : <p className='no-routes'>No Climbs Yet</p>}
      </div>
    </div>
  );
}

export default Profile;
