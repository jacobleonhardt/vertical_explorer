import React, { useState } from 'react';
import { login } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logo from '../../images/vertical_explorer_logo-transparent.png';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const userCredentials = { credential, password };

    return dispatch(login(userCredentials))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='form-content'>
    <form onSubmit={handleSubmit}>
      <div className={errors.length > 0 ? 'errList' : null}>
        {errors.map((error, idx) => <p key={idx}><i class="fas fa-exclamation-triangle"></i>{error}</p>)}
      </div>
      <label>
        <span>Username/Email</span><br/>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder="Username/Email"
          required
        />
      </label><br/>
      <label>
        <span>Password</span><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </label><br/>
      <div className='submitBtn'><button type="submit">Login</button></div>
    </form>
    </div>
  );
}

export default LoginFormPage;
