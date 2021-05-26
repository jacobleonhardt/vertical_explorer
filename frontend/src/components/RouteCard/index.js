import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './RouteCard.css';

function RouteCard({route}) {

  const typeList = useSelector(state => state.types);
  let routeType = typeList.find(type => type.id == route.type_id);

    return (
            <div className='route-card'>
              <div className='icons'>
                <Link to={`/route/${route.id}`}><i className="fas fa-ellipsis-h"></i></Link>
              </div>
              <h5><span className='routeName'>{route.location}</span> {route.favorite ? <i class="fas fa-heart"></i> : null} </h5>
              <h6>{routeType.name}</h6>
              {route.difficulty ? <p className='routeDetails'><i className="fas fa-ruler-vertical"></i> {route.height} ft <br/><i className="fas fa-tachometer-alt"></i> {route.difficulty}</p> : null}
            </div>
    )};

export default RouteCard;
