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
      TELLY PAGE
      <div>{telly?.id?.name}</div>
      <div>
        {telly?.id?.city}, {telly?.id?.state}
      </div>
      <div>
        {telly?.id?.Photos &&
          telly?.id?.Photos.map((photo) => (
            <img alt="" src={`${photo?.imageUrl}`} />
          ))}
      </div>
    </>
  );
}

export default TellyPage;
