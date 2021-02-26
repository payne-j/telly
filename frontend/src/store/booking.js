const CREATE_BOOKING = "booking/createBooking";
const CANCEL_BOOKING = "booking/cancelBooking";
const GET_BOOKING = "booking/getBooking";

export const createBooking = (userId, id, startDate, endDate, total) => {
  return {
    type: CREATE_BOOKING,
    payload: { userId, id, startDate, endDate, total },
  };
};
export const cancelBooking = (id) => {
  return {
    type: CANCEL_BOOKING,
    payload: id,
  };
};
export const getBooking = (id) => {
  return {
    type: GET_BOOKING,
    payload: id,
  };
};

// export const search = (if) => async (dispatch) => {
//   if (!location) return;
//   const response = await fetch(`/api/search/${location}`);
//   const data = await response.json();
//   dispatch(getLocation(data.location));
//   return data.location;
// };

// export const searchResults = (session) => session.search.location;
// export const resultId = (session) => session.search;
const initialState = { booking: null };

const bookingReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_BOOKING:
      newState = Object.assign({}, state);
      newState.booking = action.payload;
      return newState;
    case GET_BOOKING:
      newState = Object.assign({}, state);
      newState.booking = action.payload;
      return newState;
    default:
      return state;
  }
};

export default bookingReducer;
