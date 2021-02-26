import { useState, useEffect } from "react";
import * as searchActions from "../../store/search";
import * as bookingActions from "../../store/booking";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "../../context/Search";
import "./BookingForm.css";

function BookingForm() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user);
  const {
    location,
    setLocation,
    startDate,
    endDate,
    guests,
    id,
    total,
    length,
    price,
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

  useEffect(() => dispatch(searchActions.tellyPage(id)), [
    id,
    setLocation,
    dispatch,
  ]);

  const telly = useSelector(searchActions.resultId);

  return (
    <>
      <div>
        <img
          alt=""
          width="600"
          height="400"
          src={`${telly?.id?.Photos[0]?.imageUrl}`}
        />
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="host-div">
            {telly?.id?.type} hosted by {telly?.id?.User?.username}
            <img
              alt=""
              id="modal-host"
              src={`${telly?.id?.User?.profileImage}`}
            />
          </div>
          <div className="div-lines">{telly?.id?.name}</div>
          <div className="div-lines">
            {telly?.id?.city}, {telly?.id?.state}
          </div>
          <div className="div-lines"></div>
          <div>
            Check in: {startDate} | Checkout: {endDate}
          </div>
          <div className="div-lines"></div>
          <div>
            ${telly?.id?.price} X {length} night(s) | Total: ${total}
          </div>
          <div></div>
          <button className="modal-btn" type="submit">
            Reserve
          </button>
        </div>
      </form>
    </>
  );
}

export default BookingForm;
