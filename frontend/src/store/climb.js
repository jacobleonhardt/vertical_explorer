import { csrfFetch } from './csrf';

// Constants
const GET_CLIMBS = '/climbs/GET';
const ADD_CLIMB = '/climbs/ADD';
const REMOVE_CLIMB = '/climbs/REMOVE';

// Thunks
export const getClimbs = () => async (dispatch) => {
    const res = await csrfFetch('/api/climbs');
    if (res.ok) {
      const climbs = await res.json();
      dispatch(get(climbs));
    }
}

export const addClimb = (climb) => async (dispatch) => {
    const { user_id, name, notes, climb_height } = climb;
    let res = await csrfFetch('/api/climbs', {
        method: "POST",
        body: JSON.stringify({
            user_id,
            name,
            notes,
            climb_height
        }),
      });
    const data = await res.json();
    dispatch(add(data));
    return res;
  };

  export const editClimb = (climb) => async (dispatch) => {
    const { user_id, name, notes, climb_height } = climb;
    let res = await csrfFetch('/api/climbs', {
        method: "PUT",
        body: JSON.stringify({
            user_id,
            name,
            notes,
            climb_height
        }),
      });
    const data = await res.json();
    dispatch(add(data));
    return res;
  };

  export const deleteClimb = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/climbs`, {
      method: 'DELETE',
      body: JSON.stringify({
        id
      })
      });

    if(res.ok) {
      dispatch(remove());
    }
    return res;
  };

// Action Creator
function get(climbs) {
   return {
    type: GET_CLIMBS,
    climbs
}};

function add(climbs) {
    return {
      type: ADD_CLIMB,
      climbs,
    };
  }

function remove() {
    return {
      type: REMOVE_CLIMB
    };
}

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
