import { useState } from "react";
import * as bookingActions from "../../store/booking";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "../../context/Search";

function BookingForm() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user);
  const {
    location,
    setLocation,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    guests,
    setGuests,
    id,
    setId,
    total,
    setTotal,
  } = useSearch();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [payment, setPayment] = useState("XXXX-XXXX-XXXX-XXXX");

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      bookingActions.createBooking({ userId, id, startDate, endDate, total })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div>
            <ul className="errors-list">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <div className="title">First name</div>
          <div>
            <input
              type="text"
              placeholder="        first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="first-name"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="            last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button className="modal-btn" type="submit">
            Reserve
          </button>
        </div>
      </form>
    </>
  );
}

export default BookingForm;
