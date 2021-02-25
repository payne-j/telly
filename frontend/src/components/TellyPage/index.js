import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import { useSearch } from "../../context/Search";
import "./TellyPage.css";

function TellyPage() {
  const dispatch = useDispatch();
  const { id } = useSearch();
  useEffect(() => dispatch(searchActions.tellyPage(id)), [id, dispatch]);
  const telly = useSelector(searchActions.resultId);
  console.log("TELLY:", telly);

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
          <div className="photo-container">
            {telly?.id?.Photos &&
              telly?.id?.Photos.map((photo) => (
                <img
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
    </>
  );
}

export default TellyPage;
