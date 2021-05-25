import React, { useEffect, useState } from 'react';
// import { getClimbs } from '../../store/climb';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './ClimbCard.css';

function ClimbCard() {

    const prevClimbs = useSelector(state => state.climbs);

    return (
    <div>
      <div className='prev-climbs'>
        {prevClimbs.map(climb => {
          return (
            <div className='climb-card'>
              <div className='icons'>
                <Link to='/climbs/edit'><i class="fas fa-ellipsis-h"></i></Link>
              </div>
              <h5><span className='climbName'>{climb.name}</span><span className='seperator'> | </span><span className='climbHeight'>{climb.climb_height} ft</span></h5>
              {climb.notes ? <p>{climb.notes}</p> : null}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ClimbCard;
