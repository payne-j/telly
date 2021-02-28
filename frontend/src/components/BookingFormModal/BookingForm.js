import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as searchActions from "../../store/search";
import * as bookingActions from "../../store/booking";
import { useDispatch, useSelector } from "react-redux";
import { useSearch } from "../../context/Search";
import "./BookingForm.css";

function BookingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user.id);
  const {
    setLocation,
    startDate,
    endDate,
    guests,
    tellyId,
    total,
    length,
  } = useSearch();

  const [userId, setUserId] = useState(user);

  const book = () => {
    dispatch(
      bookingActions.makeBooking(userId, tellyId, startDate, endDate, total)
    );
    history.push(`/profile/${userId}`);
  };
  useEffect(() => {
    dispatch(searchActions.tellyPage(tellyId));
  }, [tellyId, setLocation, dispatch]);

  const telly = useSelector(searchActions.resultId);
  console.log('TELLY:', telly)
  return (
    <>
      <div>
        <img
          alt=""
          width="600"
          height="400"
          src={`${telly?.tellyId?.Photos[0]?.imageUrl}`}
        />
      </div>
      <form className="booking-form">
        <div className="form-container">
          <div className="host-div">
            {telly?.tellyId?.type} hosted by {telly?.tellyId?.User?.username}
            <img
              alt=""
              id="modal-host"
              src={`${telly?.tellyId?.User?.profileImage}`}
            />
          </div>
          <div className="div-lines">{telly?.tellyId?.name}</div>
          <div className="div-lines">
            {telly?.tellyId?.city}, {telly?.tellyId?.state}
          </div>
          <div className="div-lines"></div>
          <div>
            Check in: {startDate} | Checkout: {endDate}
          </div>
          <div className="div-lines"></div>
          <div>
            ${telly?.tellyId?.price} X {length} night(s) | Total: ${total}
          </div>
          <div>number of guests: {guests}</div>
          <div></div>
          <button className="modal-btn" onClick={book}>
            Book now
          </button>
        </div>
      </form>
    </>
  );
}

export default BookingForm;
