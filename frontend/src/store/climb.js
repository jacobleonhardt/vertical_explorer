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

export const editClimb = (climb) => async (dispatch) => {
    const { user_id, name, notes, height } = climb;
    let response = await csrfFetch(`/api/climbs`, {
        method: "PUT",
        body: JSON.stringify({
            user_id,
            name,
            notes,
            height
        }),
      });
    const data = await response.json();
    dispatch(add(data));
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
