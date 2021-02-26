import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import * as bookingActions from "../../store/booking";
import "./ProfilePage.css";

function ProfilePage() {
  const results = useSelector(searchActions.searchResults);
  // const userBookings = useSelector(bookingActions.userBookings);
  const user = useSelector((state) => state.session.user);

  return (
    <>
      <div className="profile-greeting">You're going to **LOCATION**</div>
      <div>Profile Photo</div>
      <div>Name</div>
      <div>Upcoming Bookings</div>
      <div>Reviews</div>
    </>
  );
}

export default ProfilePage;
