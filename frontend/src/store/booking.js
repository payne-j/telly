const CREATE_BOOKING = "booking/createBooking";
const CANCEL_BOOKING = "booking/cancelBooking";
const GET_BOOKING = "booking/getBooking";

const createBooking = (userId, tellyId, startDate, endDate, total) => {
  return {
    type: CREATE_BOOKING,
    payload: { userId, tellyId, startDate, endDate, total },
  };
};
const cancelBooking = (bookingId) => {
  return {
    type: CANCEL_BOOKING,
    payload: bookingId,
  };
};
const getBooking = (bookingId) => {
  return {
    type: GET_BOOKING,
    payload: bookingId,
  };
};

export const makeBooking = (
  userId,
  tellyId,
  startDate,
  endDate,
  total
) => async (dispatch) => {
  console.log('USER ID:', userId);
  const response = await fetch(
    `/api/bookings/${tellyId}/${startDate}/${endDate}/${userId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        tellyId,
        startDate,
        endDate,
        total,
      }),
    }
  );
  const data = await response.json();
  dispatch(createBooking(data.booking));
  console.log("THUNK DATA>BOOKING:", data.booking);
  return data.booking;
};

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
