import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/climb";
import { getRoutes } from '../../store/route';
import './Climbs.css';

function Climbs() {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const sessionRoutes = useSelector(state => state.routes);
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    let [climb_height, setClimb_height] = useState(0);
    const [routes, setRoutes] = useState([]);
    const [errors, setErrors] = useState([]);
    const user_id = sessionUser.id;
    let selectedRoutes = [];

  useEffect(() => {
    dispatch(getRoutes());
  }, [])

    const handleSubmit = (e) => {
      console.log('############', climb_height)
        e.preventDefault();
        setErrors([]);
        dispatch(sessionActions.addClimb({ user_id, name, notes, climb_height, routes }))
        history.push('/');

        // return setErrors(['Something went wrong. Please check that all the necessary fields are filled out.']);
      };


      const onCheck = (e) => {
        selectedRoutes.push({
          route_id: e.target.id,
          location: e.target.name,
          added: e.target.value,
        });
        setRoutes([...routes, ...selectedRoutes]);
        // routes.forEach(route => {
        //   setClimb_height([...climb_height, route.height])
        // })
      }

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
          <span>Add Routes</span><br/>
          <p>Routes I Climbed</p>
          <hr/>
            {sessionRoutes.map(route => (
              <div className='route-selection'>
                <input
                  type="checkbox"
                  onChange={onCheck}
                  key={route.id}
                  name={route.location}
                  id={route.id}
                  // checked={route[selected]}
                  />{route.location}
                </div>
            ))}
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
          <div className='submitBtn'><button className='formBtn' type="submit">Add Climb</button></div>
          <Link to='/' className='link-to'><i class="fas fa-backward"></i> Back</Link>
          {/* <div className="delete"><button className='deleteBtn' onClick={onDelete}>Delete Climb <i class="fas fa-trash"></i></button></div> */}
        </form>
        </div>
      );
    }

export default Climbs;
