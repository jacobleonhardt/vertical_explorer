import { csrfFetch } from './csrf';

// Constants
const GET_ROUTE = '/routes/GET';

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
    dispatch(get(data));
    return res;
  };

  export const editClimb = (updates) => async (dispatch) => {
    const { id, user_id, name, notes, climb_height } = updates;
    let res = await csrfFetch(`/api/climbs/${id}`, {
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

  export const deleteClimb = (deleteIt) => async (dispatch) => {
    const { id, user_id } = deleteIt;
    const res = await csrfFetch(`/api/climbs/${id}`, {
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
function get(climbs) {
   return {
    type:GET_ROUTE,
    climbs
}};


// Reducer
let initialState = [];
export default function routeReducer(state = initialState, action) {
  let newState;
      switch (action.type) {
        case GET_ROUTE:
          console.log('<><><>', action.climbs)
          // newState = [...action.climbs];
           newState = [];
           action.climbs.forEach(climb => {
             const temp = {...climb};
             newState.push(temp);
           })
           return newState;
        default:
            return state;
    }
};
