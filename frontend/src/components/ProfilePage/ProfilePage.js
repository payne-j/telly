import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import * as bookingActions from "../../store/booking";
import "./ProfilePage.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const [bookingId, setBookingId] = useState();
  const results = useSelector(searchActions.searchResults);
  const bookings = useSelector(bookingActions.bookings);
  const user = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(bookingActions.userBookings(user?.id));
  }, [user?.id, dispatch]);

  const cancel = (e) => {
    console.log("EEEEEEEEEEE", e.target.id);
    dispatch(bookingActions.deleteBooking(e.target.id));
  };

  return (
    <>
      <div className="profile-greeting">You're going to **LOCATION**</div>
      <img className="profile-image" alt="" src={`${user?.profileImage}`}></img>
      <div>{user?.username}</div>
      <div className="bookings-div">Upcoming Bookings</div>
      <div className="user-bookings">
        {bookings &&
          bookings?.booking?.map((booking) => (
            <div className="booking-container">
              <div className="user-booking">{booking.Telly.name}</div>
              <div className="user-dates">
                {booking.startDate &&
                  booking.startDate.toString().split("T")[0]}{" "}
                to
                {booking.endDate && booking.endDate.toString().split("T")[0]}
              </div>
              <div>
                <button className="cancel-btn" onClick={(e) => cancel(e)}>
                  Cancel
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="reviews-div">Reviews</div>
    </>
  );
}

export default ProfilePage;
