import React from 'react';
// import { getClimbs } from '../../store/climb';
// import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './ClimbCard.css';

function ClimbCard({climb}) {
    return (
            <div className='climb-card'>
              <div className='icons'>
                <Link to={`/climbs/${climb.id}`}><i className="fas fa-ellipsis-h"></i></Link>
              </div>
              <h5><span className='climbName'>{climb.name}</span><span className='seperator'> | </span><span className='climbHeight'>{climb.climb_height} ft</span></h5>
              {climb.notes ? <p>{climb.notes}</p> : null}
            </div>
    )};

export default ClimbCard;
