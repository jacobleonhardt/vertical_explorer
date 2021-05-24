import { csrfFetch } from './csrf';

// Constants
const GET_CLIMBS = '/climbs/GET';

// Thunks
export const getClimbs = () => async dispatch => {
    const res = await csrfFetch(`/api/climbs`);

    if (res.ok) {
      const climbs = await res.json();
      dispatch(get(climbs));
    }
  };

// Action Creator
function get(climbs) {
   return {
    type: GET_CLIMBS,
    climbs
}};

// Reducer
export default function climbsReducer(state = null, action) {
    let newState;
    switch (action.type) {
        case GET_CLIMBS:
            newState = action.climbs;
            return newState;
        default:
            return state;
    }
};
