const GET_LOCATION = "search/getLocation";
const GET_ID = "search/getId";

const getLocation = (location) => {
  return {
    type: GET_LOCATION,
    payload: location,
  };
};
const getId = (id) => {
  return {
    type: GET_ID,
    payload: id,
  };
};

export const search = (location) => async (dispatch) => {
  if (!location) return;
  const response = await fetch(`/api/search/${location}`);
  const data = await response.json();
  dispatch(getLocation(data.location));
  return data.location;
};

export const tellyPage = (id) => async (dispatch) => {
  const response = await fetch(`/api/search/tellies/${id}`);
  console.log("THUNK:", response);
  const data = await response.json();
  dispatch(getId(data.id));
  return data.id;
};

export const availability = (location, startDate, endDate, guests) => async (
  dispatch
) => {
  const response = await fetch(
    `/api/search/${location}#${startDate}#${endDate}#${guests}`
  );
  const data = await response.json();
  dispatch(getLocation(data.location));
  return data.location;
};

export const searchResults = (session) => session.search.location;
export const resultId = (session) => session.search.id;

const initialState = { location: null };

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_LOCATION:
      newState = Object.assign({}, state);
      newState.location = action.payload;
      return newState;
    case GET_ID:
      newState = Object.assign({}, state);
      newState.id = action.payload;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
