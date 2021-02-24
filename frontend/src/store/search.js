const GET_LOCATION = "search/getLocation";

const getLocation = (location) => {
  return {
    type: GET_LOCATION,
    payload: location,
  };
};

export const autocomplete = (location) => async (dispatch) => {
  if (!location) return;
  const response = await fetch(`/api/search/${location}`);
  const data = await response.json();
  dispatch(getLocation(data.location));
  return data.location;
};

const initialState = { location: null };

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_LOCATION:
      newState = Object.assign({}, state);
      newState.location = action.payload;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
