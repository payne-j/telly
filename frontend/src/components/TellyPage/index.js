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
  const { id, setLocation, total, setTotal } = useSearch();
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
      <div className="telly-host">{telly?.id?.User?.username}</div>
      <div>
        <img
          alt="host-profile"
          src={`${telly?.id?.User.profileImage}`}
          className="telly-host-image"
        />
      </div>
      <div>${telly?.id?.price} / night</div>
      <div>
        Book this Telly for {lengthOfStay} nights at ${total}
        <BookingForm />
      </div>
    </>
  );
}

export default TellyPage;
