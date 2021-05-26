import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClimbs } from '../../store/climb';
import './Routes.css';

function Profile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let myRoutes = useSelector(state => state.routes);

  useEffect(() => {
    // return dispatch(getRoutes());
  }, [])

  return (
    // <div>
    //   <div className='profile-content'>
    //     <div className='greeting'>
    //       <h2><span>{sessionUser.username}</span></h2>
    //       {/* <h3><i class="fas fa-mountain"></i> <span>{sessionUser.total_climbed ? sessionUser.total_climbed : '0'}</span> ft</h3> */}
    //     </div>
    //   </div>
    //   <div className='prev-climbs'>
    //     <h4>Recent Climbs</h4>
    //      {myRoutes ? myRoutes.map((climb) => <RouteCard climb={climb} key={route.id}/>) : <span className='loading'><i class="fad fa-spinner"></i> Loading...</span>}
    //   </div>
    // </div>
    <p>Coming Soon</p>
  );
}

export default Profile;
