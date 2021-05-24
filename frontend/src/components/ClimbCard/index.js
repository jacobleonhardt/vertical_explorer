import React, { useEffect, useState } from 'react';
// import { getClimbs } from '../../store/climb';
import { useSelector } from 'react-redux';
import './ClimbCard.css';

function ClimbCard() {

    const prevClimbs = useSelector(state => state.climbs);

    return (
    <div>
      <div className='prev-climbs'>
        {prevClimbs.map(climb => {
          return (
            <div className='climb-card'>
              <h4><span className='climbName'>{climb.name}</span><span className='climbHeight'>|| {climb.climb_height} ft</span></h4>
              {climb.notes ? <p>{climb.notes}</p> : null}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ClimbCard;
