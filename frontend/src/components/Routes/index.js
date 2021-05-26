import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRoutes } from '../../store/route';
import { getTypes } from '../../store/type';
import RouteCard from '../RouteCard';
import './Routes.css';

function Routes() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let myRoutes = useSelector(state => state.routes);

  useEffect(() => {
    dispatch(getTypes())
    return dispatch(getRoutes());
  }, [])

  return (
    <div>
      <div className='profile-content'>
        <div className='heading'>
          <h2><span>{sessionUser.username}'s Routes</span></h2>
        </div>
      </div>
      <div className='my-routes'>
        <h4><Link to='/add' className='new-route'><i className="fas fa-plus"></i> Add a Route</Link></h4>
         {myRoutes ? myRoutes.map((route) => <RouteCard route={route} key={route.id}/>) : <span className='loading'><i class="fad fa-spinner"></i> Loading...</span>}
      </div>
    </div>
  );
}

export default Routes;
