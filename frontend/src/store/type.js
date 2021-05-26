import { csrfFetch } from './csrf';

// Constants
const GET_TYPE = '/types/GET';

// Thunks
export const getTypes = () => async (dispatch) => {
    const res = await csrfFetch('/api/types');

    if (res.ok) {
      const types = await res.json();
      dispatch(get(types));
    }
}

export const addTypes = (climb) => async (dispatch) => {
    const { user_id, name, notes, climb_height } = climb;
    let res = await csrfFetch('/api/routes', {
        method: "POST",
        body: JSON.stringify({
            user_id,
            name,
            notes,
            climb_height
        }),
      });
    const data = await res.json();
    dispatch(get(data));
    return res;
  };

  export const editTypes = (updates) => async (dispatch) => {
    const { id, user_id, name, notes, climb_height } = updates;
    let res = await csrfFetch(`/api/routes/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            id,
            user_id,
            name,
            notes,
            climb_height
        }),
      });
    const data = await res.json();
    dispatch(get(data));
    return res;
  };

  export const deleteTypes = (deleteIt) => async (dispatch) => {
    const { id, user_id } = deleteIt;
    const res = await csrfFetch(`/api/routes/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id,
        user_id
      })
      });

      const data = await res.json();
      dispatch(get(data));
      return res;
  };

// Action Creator
function get(types) {
   return {
    type: GET_TYPE,
    types
}};


// Reducer
let initialState = [];
export default function typeReducer(state = initialState, action) {
  let newState;
      switch (action.type) {
        case GET_TYPE:
           newState = [];
           action.types.forEach(types => {
             const temp = {...types};
             newState.push(temp);
           })
           return newState;
        default:
            return state;
    }
};
