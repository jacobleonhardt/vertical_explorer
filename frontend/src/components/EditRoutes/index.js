import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router'
import * as sessionActions from "../../store/climb.js";
// import { getClimbs, getOneClimb } from '../../store/climb';
import './EditClimb.css';

export default function EditClimb() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const user_id = useSelector((state) => state.session.user.id);
    const climbList = useSelector((state) => state.climbs);
    const climb = climbList.find((climb) => climb.id == params.id);
    const [name, setName] = useState(climb.name);
    const [notes, setNotes] = useState(climb.notes);
    const [height, setHeigh] = useState(climb.height);
    const [errors, setErrors] = useState([]);
    const id = climb.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(sessionActions.editClimb({user_id, name, notes, height, id }))
        history.push('/');

        return setErrors(['Something went wrong. Please check that all the necessary fields are filled out.']);
      };

      const onDelete = (e) => {
        e.preventDefault();
        const deleteThis = {id, user_id};
        dispatch(sessionActions.deleteClimb(deleteThis))
        history.push('/');
      };

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
          <span>Notes</span><br/>
            <textarea
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes..."
            ></textarea>
          </label><br/>
          <label>
          <span>Add Routes</span><br/>
            {/* <select>
            {routes.map(route => (
                <input
                  type="checkbox"
                  onChange={route.name}
                  key={route.id}
                  name={route.name}
                  checked={checked}
                />
            ))}
            </select> */}
          </label><br/>
          <div className='submitBtn'><button className='formBtn' type="submit">Update Climb</button></div>
          <Link to='/' className='link-to'><i class="fas fa-backward"></i> Back</Link>
          <div className="delete"><button className='deleteBtn' onClick={onDelete}>Delete Climb <i class="fas fa-trash"></i></button></div>
        </form>
        </div>
      );
    }
