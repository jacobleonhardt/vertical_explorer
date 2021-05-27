import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router'
import * as sessionActions from "../../store/climb.js";
// import { getClimbs } from '../../store/climb';
// import { getRoutes } from '../../store/route';
// import { getTypes } from '../../store/type';
import './EditClimb.css';

export default function EditClimb() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const user_id = useSelector((state) => state.session.user.id);
    let [climb_height, setClimb_height] = useState(0);
    const climbList = useSelector((state) => state.climbs);
    const climb = climbList.find((climb) => climb.id == params.id);
    const sessionRoutes = useSelector((state) => state.routes);
    const [name, setName] = useState(climb.name);
    const [notes, setNotes] = useState(climb.notes);
    const [height, setHeigh] = useState(climb.height);
    const [routes, setRoutes] = useState(climb.Routes);

  // let isSelected = (routeId) => {
  //     for(let i = 0; i < routes.length; i++) {
  //       if (routeId === routes[i].id) {
  //         return true;
  //       }
  //   }
  //   return false;
  // }

    const [errors, setErrors] = useState([]);
    const id = climb.id;


    const handleSubmit = (e) => {
      // console.log('############', routes)
        e.preventDefault();
        setErrors([]);
        dispatch(sessionActions.editClimb({ id, user_id, name, notes, climb_height, routes }))
        history.push('/');
      };

      const onDelete = (e) => {
        e.preventDefault();
        const deleteThis = {id, user_id};
        dispatch(sessionActions.deleteClimb(deleteThis))
        history.push('/');
      };

      const onCheck = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const location = target.location;
        setRoutes({[location]: value});
      }

    return (
        <div className='climb-edit-form-content'>
        <form onSubmit={handleSubmit}>
          <h3>Edit {climb.name}</h3>
          <div className={errors.length > 0 ? 'errList' : null}>
            {errors.map((error, idx) => <p key={idx}><i class="fas fa-exclamation-triangle"></i>{error}</p>)}
          </div>
          <label>
          <span>Name</span><br/>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Climb Name"
              required
            />
          </label><br/>
          <label>
          <span>Add Routes</span><br/>
          <p>Routes Climbed</p>
          <hr/>
            {sessionRoutes.length > 0 ? sessionRoutes.map((route) => (
              <div className='route-selection' key={`${route.id}`}>
                <input
                  type="checkbox"
                  onChange={onCheck}
                  key={route.id}
                  name={route.location}
                  // checked={isSelected(route.id)}
                  />{route.location}
                </div>
                )) :
            <Link to='/add' className="add-routes"><i className="fas fa-plus"></i> Let's add some routes</Link> }
            <hr/>
          </label><br/>
          <label>
          <span>Notes</span><br/>
            <textarea
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes..."
            ></textarea>
          </label><br/>
          <div className='submitBtn'><button className='formBtn' type="submit">Update Climb</button></div>
          <Link to='/' className='link-to'><i class="fas fa-backward"></i> Back</Link>
          <div className="delete"><button className='deleteBtn' onClick={onDelete}>Delete Climb <i class="fas fa-trash"></i></button></div>
        </form>
        </div>
      );
    }
