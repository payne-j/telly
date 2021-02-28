import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import * as bookingActions from "../../store/booking";
import "./BookingsPage.css";

function BookingsPage() {
  const dispatch = useDispatch();
  const bookings = useSelector(bookingActions.bookings);
  const user = useSelector((state) => state.session.user);
  const [bookingId, setBookingId] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    dispatch(bookingActions.userBookings(user.id));
  }, [user.id, refreshKey, dispatch]);

  const cancel = (e) => {
    dispatch(bookingActions.deleteBooking(e.target.value));
    setRefreshKey((oldKey) => oldKey + 1);
  };

  const [showBookings, setShowBookings] = useState(false);

  const show = () => {
    showBookings ? setShowBookings(false) : setShowBookings(true);
  };
  return (
    <>
      <div className="bookings-user">{user.username}</div>
      <div className="bookings-div">
        Upcoming Bookings{" "}
        <button id="show-btn" onClick={show}>
          Show bookings
        </button>
      </div>
      <div className="user-bookings">
        {showBookings &&
          bookings.booking.map((booking, idx) => (
            <div key={idx} className="booking-container">
              <div className="profile-greeting">
                You're going to {booking?.Telly?.city}!
              </div>
              <i className="fas fa-suitcase-rolling"></i>
              <div className="user-booking">{booking?.Telly.name}</div>
              <div className="user-dates">
                {booking?.startDate &&
                  booking.startDate.toString().split("T")[0]}{" "}
                to {booking.endDate && booking.endDate.toString().split("T")[0]}
              </div>
              <div>
                <button
                  value={booking.id}
                  className="cancel-btn"
                  onClick={(e) => [setBookingId(e.target.value), cancel(e)]}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default BookingsPage;
