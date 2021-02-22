import { csrfFetch } from "./csrf";

const GET_LOCATION = "searchLocation/GET_LOCATION";

const getLocation = (location) => {
  return {
    type: GET_LOCATION,
    payload: location,
  };
};

export const locations = () => async (dispatch) => {
  const response = await csrfFetch("/api/locations");
  const data = await response.json();
  dispatch(getLocation(data.address));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default searchLocation;
