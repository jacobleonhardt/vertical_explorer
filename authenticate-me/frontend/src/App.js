import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignUpFormPage';
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // this is going to access the route, via calling restore
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);


  // render if we have accessed the route
  return isLoaded && (
      <Switch>
        <Route path='/' exact>
          <h1>Hello from App</h1>
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
  );
}

export default App;
