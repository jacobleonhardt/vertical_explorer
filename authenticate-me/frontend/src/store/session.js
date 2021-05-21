// Imports
import { csrfFetch } from './csrf';


// Constants
// const dispatch = useDispatch();
const LOGGED_IN = '/session/LOGGED_IN';
const LOGGED_OUT = '/session/LOGGED_OUT';

// Thunks

export const login = (credentials) => async (dispatch) => {
  const res = await csrfFetch(`/api/session`, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  const user = await res.json();
  if (res.ok) {
    dispatch(setSessionUser(user));
  } else {
    throw res;
  }
};

// Action Creators
function setSessionUser(user) {
  return {
    type: LOGGED_IN,
    user,
  };
}

function removeSessionUser() {
  return {
    type: LOGGED_OUT
  };
}

// Reducer
// state === session slice of state
export default function sessionReducer(state = { user: null}, action) {
  let newState;
  console.log('>>>',state);
  switch(action.type) {
        case LOGGED_IN:
          newState = action.user;
          return newState;
        case LOGGED_OUT:
          newState = null;
          return newState;
        default:
          return state;
    }
}
