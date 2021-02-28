import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as searchActions from "../../store/search";
import { useSearch } from "../../context/Search";
import BookingForm from "../BookingFormModal/index";
import LoginForm from "../LoginFormModal/index";
import "./TellyPage.css";

function TellyPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.session.user);
  const { startDate, endDate } = useSearch();
  const {
    tellyId,
    setLocation,
    total,
    setTotal,
    length,
    setLength,
  } = useSearch();
  useEffect(() => dispatch(searchActions.tellyPage(tellyId)), [
    tellyId,
    dispatch,
  ]);
  const telly = useSelector(searchActions.resultId);

  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);
  const lengthOfStay = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  setLength(lengthOfStay);
  const totalCost = telly?.tellyId?.price * lengthOfStay;
  setTotal(totalCost);

  // // const total = telly.id.price *
  return (
    <>
      <div className="telly-name">{telly?.tellyId?.name}</div>
      <div className="location">
        {telly?.tellyId?.city}, {telly?.tellyId?.state}
      </div>
      <div className="photo-slideshow">
        <div className="slider">
          <span id="photo-1"></span>
          <span id="photo-2"></span>
          <span id="photo-3"></span>
          <span id="photo-4"></span>
          <div className="photo-container">
            {telly?.tellyId?.Photos &&
              telly?.tellyId?.Photos.map((photo, idx) => (
                <img
                  key={idx}
                  className="photo"
                  width="400"
                  height="300"
                  alt=""
                  src={`${photo?.imageUrl}`}
                />
              ))}
          </div>
          <div className="buttons">
            <a href="#photo-1"></a>
            <a href="#photo-2"></a>
            <a href="#photo-3"></a>
            <a href="#photo-4"></a>
          </div>
        </div>
      </div>
      <div className="telly-host">
        {telly?.tellyId?.occupancy} Guests · {telly?.tellyId?.totalBedrooms}{" "}
        Bedrooms · {telly?.tellyId?.totalBathrooms} Bathrooms
        <span>
          Hosted by {telly?.tellyId?.User?.username}
          <img
            alt="host-profile"
            src={`${telly?.tellyId?.User.profileImage}`}
            className="telly-host-image"
          />
        </span>
      </div>
      <div className="telly-info">
        <div className="telly-description">{telly?.tellyId?.description}.</div>
        <div className="telly-price">${telly?.tellyId?.price} / night</div>
        <div className="telly-amenities-container">
          Amenities
          <div className="telly-amenities">
            {telly?.tellyId?.internet && (
              <div>
                <i className="fas fa-wifi"></i> wifi
              </div>
            )}
            {telly?.tellyId?.airconditioning && (
              <div>
                <i className="fas fa-wind"></i> air-conditioning
              </div>
            )}
            {telly?.tellyId?.tv && (
              <div>
                <i className="fas fa-tv"></i> tv
              </div>
            )}
            {telly?.tellyId?.washerDryer && (
              <div>
                <i className="fas fa-wifi"></i> washer/dryer
              </div>
            )}
            {telly?.tellyId?.gym && (
              <div>
                <i className="fas fa-dumbbell"></i> gym
              </div>
            )}
            {telly?.tellyId?.kitchen && (
              <div>
                <i className="fas fa-utensils"></i> kitchen
              </div>
            )}
            {telly?.tellyId?.freeParking && (
              <div>
                <i className="fas fa-parking"></i> free parking
              </div>
            )}
            {telly?.tellyId?.essential && (
              <div>
                <i className="fas fa-hand-holding-medical"></i> essentials
              </div>
            )}
            {telly?.tellyId?.pool && (
              <div>
                <i className="fas fa-swimming-pool"></i> pool
              </div>
            )}
          </div>
        </div>
        <div className="booking-container">
          Book this Telly for {lengthOfStay} night(s) at ${total}
          {userId ? <BookingForm /> : <LoginForm />}
        </div>
      </div>
    </>
  );
}

export default TellyPage;
