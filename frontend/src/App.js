import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignUpFormPage';
import Landing from './components/Landing';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile/index.js';
import Climbs from './components/Climbs/index.js';
import EditClimb from './components/EditClimb/index.js';
import Footer from './components/Footer';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    // this is going to access the route, via calling restore
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);


  // render if we have accessed the route
  return (
    <div className='content'>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            {sessionUser ? <Profile /> : <Landing />}
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/settings">
            <EditProfile />
          </Route>
          <Route path="/climbs">
            <Climbs />
          </Route>
          <Route path='/climbs/edit'>
            <EditClimb />
          </Route>
        </Switch>
      )}
      <Footer />
    </div>
  );
}

export default App;
