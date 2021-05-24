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

export default ClimbCard;
