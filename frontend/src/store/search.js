import { csrfFetch } from "./csrf";

const SET_LOCATION = "search/setLocation";
const REMOVE_LOCATION = "search/removeLocation";

const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    payload: location,
  };
};
const removeLocation = () => {
  return {
    type: REMOVE_LOCATION,
  };
};

export const search = (location) => async (dispatch) => {
  console.log(location);
  const response = await csrfFetch("/api/search");
  const data = await response.json();
  console.log(data);
  dispatch(setLocation(data.location));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/search", {
    method: "DELETE",
  });
  dispatch(removeLocation());
  return response;
};

const initialState = { user: null };

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_LOCATION:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_LOCATION:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
