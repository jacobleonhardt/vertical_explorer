import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import logo from '../../images/vertical_explorer_logo-transparent.png';
import * as sessionActions from "../../store/session";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }

    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className='form-content'>
    <form onSubmit={handleSubmit}>
      <Link to='/'><img src={logo} alt="Vertical Explorer Logo" /></Link>
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
      <label>
      <span>Confirm Password</span><br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      </label><br/>
      <div className='submitBtn'><button className='formBtn' type="submit">Join</button></div>
      <Link to='/login' className='link-to'>Have an Account?</Link>
    </form>
    </div>
  );
}

export default SignupFormPage;
