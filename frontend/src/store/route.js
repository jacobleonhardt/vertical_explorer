import { csrfFetch } from './csrf';

// Constants
const GET_ROUTE = '/routes/GET';

// Thunks
export const getRoutes = () => async (dispatch) => {
    const res = await csrfFetch('/api/routes');

    if (res.ok) {
      const route = await res.json();
      dispatch(get(route));
    }
}

export const addRoute = (climb) => async (dispatch) => {
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

  export const editRoute = (updates) => async (dispatch) => {
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

  export const deleteRoute = (deleteIt) => async (dispatch) => {
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
function get(route) {
   return {
    type: GET_ROUTE,
    route
}};


// Reducer
let initialState = [];
export default function routeReducer(state = initialState, action) {
  let newState;
      switch (action.type) {
        case GET_ROUTE:
           newState = [];
           action.route.forEach(route => {
             const temp = {...route};
             newState.push(temp);
           })
           return newState;
        default:
            return state;
    }
};
