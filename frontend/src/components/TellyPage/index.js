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
  const { id, setLocation, total, setTotal, length, setLength } = useSearch();
  useEffect(() => dispatch(searchActions.tellyPage(id)), [
    id,
    setLocation,
    dispatch,
  ]);
  const telly = useSelector(searchActions.resultId);

  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);
  const lengthOfStay = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  setLength(lengthOfStay);
  const totalCost = telly?.id?.price * lengthOfStay;
  setTotal(totalCost);

  // // const total = telly.id.price *
  return (
    <>
      <div className="telly-name">{telly?.id?.name}</div>
      <div className="location">
        {telly?.id?.city}, {telly?.id?.state}
      </div>
      <div className="photo-slideshow">
        <div className="slider">
          <span id="photo-1"></span>
          <span id="photo-2"></span>
          <span id="photo-3"></span>
          <span id="photo-4"></span>
          <div className="photo-container">
            {telly?.id?.Photos &&
              telly?.id?.Photos.map((photo) => (
                <img
                  key={photo.id}
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
        {telly?.id?.occupancy} Guests · {telly?.id?.totalBedrooms} Bedrooms ·{" "}
        {telly?.id?.totalBathrooms} Bathrooms
        <span>
          Hosted by {telly?.id?.User?.username}
          <img
            alt="host-profile"
            src={`${telly?.id?.User.profileImage}`}
            className="telly-host-image"
          />
        </span>
      </div>
      <div className="telly-info">
        <div className="telly-description">{telly?.id?.description}.</div>
        <div className="telly-price">${telly?.id?.price} / night</div>
        <div className="telly-amenities-container">
          Amenities
          <div className="telly-amenities">
            {!telly?.id?.internet && (
              <div>
                <i class="fas fa-wifi"></i> wifi
              </div>
            )}
            {!telly?.id?.airconditioning && (
              <div>
                <i class="fas fa-wind"></i> air-conditioning
              </div>
            )}
            {!telly?.id?.tv && (
              <div>
                <i class="fas fa-tv"></i> tv
              </div>
            )}
            {!telly?.id?.washerDryer && (
              <div>
                <i class="fas fa-wifi"></i> washer/dryer
              </div>
            )}
            {!telly?.id?.gym && (
              <div>
                <i class="fas fa-dumbbell"></i> gym
              </div>
            )}
            {!telly?.id?.kitchen && (
              <div>
                <i class="fas fa-utensils"></i> kitchen
              </div>
            )}
            {!telly?.id?.freeParking && (
              <div>
                <i class="fas fa-parking"></i> free parking
              </div>
            )}
            {!telly?.id?.essential && (
              <div>
                <i class="fas fa-hand-holding-medical"></i> essentials
              </div>
            )}
            {!telly?.id?.pool && (
              <div>
                <i class="fas fa-swimming-pool"></i> pool
              </div>
            )}
          </div>
        </div>
        <div>
          Book this Telly for {lengthOfStay} night(s) at ${total}
          {userId ? <BookingForm /> : <LoginForm />}
        </div>
      </div>
    </>
  );
}

export default TellyPage;
