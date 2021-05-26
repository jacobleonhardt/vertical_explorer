import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/climb";
import './Climbs.css';

function Climbs() {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    // const sessionClimb = useSelector((state) => state.climb);
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const [climb_height, setClimb_height] = useState(0);
    const [errors, setErrors] = useState([]);
    const user_id = sessionUser.id;
    // const id = sessionClimb.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(sessionActions.addClimb({ user_id, name, notes, climb_height }))
        history.push('/');

        // return setErrors(['Something went wrong. Please check that all the necessary fields are filled out.']);
      };

      const onDelete = (e) => {
        e.preventDefault();
        // dispatch(sessionActions.deleteClimb(id))
        history.push('/');
      };

    return (
        <div className='climb-form-content'>
        <form onSubmit={handleSubmit}>
          <h3>New Climb</h3>
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
          {/* <label> */}
          {/* <span>Add Routes</span><br/> */}
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
          {/* </label><br/> */}
          <div className='submitBtn'><button className='formBtn' type="submit">Add Climb</button></div>
          <Link to='/' className='link-to'><i class="fas fa-backward"></i> Back</Link>
          <div className="delete"><button className='deleteBtn' onClick={onDelete}>Delete Climb <i class="fas fa-trash"></i></button></div>
        </form>
        </div>
      );
    }

export default Climbs;
