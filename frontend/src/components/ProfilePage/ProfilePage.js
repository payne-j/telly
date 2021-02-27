import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import * as bookingActions from "../../store/booking";
import "./ProfilePage.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const results = useSelector(searchActions.searchResults);
  // const userBookings = useSelector(bookingActions.userBookings);
  const user = useSelector((state) => state.session.user);

  // useEffect(() => {
  //   dispatch(bookingActions.userBookings(user?.id));
  // });

  return (
    <>
      <div className="profile-greeting">You're going to **LOCATION**</div>
      <img className="profile-image" alt="" src={`${user?.profileImage}`}></img>
      <div>{user?.username}</div>
      <div className="bookings-div">Upcoming Bookings</div>
      <div className="reviews-div">Reviews</div>
    </>
  );
}

export default ProfilePage;
