import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './EditProfile.css';

export default function EditProfile() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState(sessionUser.email);
  const [username, setUsername] = useState(sessionUser.username);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const id = sessionUser.id;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.edit({ email, username, password, id }))
    }

    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const onDelete = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.deleteUser(id))
  };


  return (
    <div className='form-content'>
    <form onSubmit={handleSubmit}>
      <h3>Yo, {sessionUser.username}. What's new?</h3>
      <div className={errors.length > 0 ? 'errList' : null}>
        {errors.map((error, idx) => <p key={idx}><i class="fas fa-exclamation-triangle"></i>{error}</p>)}
      </div>
      <label>
      <span>Username</span><br/>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </label><br/>
      <label>
      <span>Email</span><br/>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </label><br/>
      <p>If fields below are left blank, your current password will remain in use.</p>
      <hr/>
      <label>
      <span>New Password</span><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />
      </label><br/>
      <label>
      <span>Confirm New Password</span><br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
        />
      </label><br/>
      <div className='submitBtn'><button className='formBtn' type="submit">Update</button></div>
      <Link to='/' className='link-to'><i class="fas fa-backward"></i> Back</Link>
      <div className="delete"><button className='deleteBtn' onClick={onDelete}>Delete Profile <i class="fas fa-trash"></i></button></div>
    </form>
    </div>
  );
}

// export default EditProfile;
