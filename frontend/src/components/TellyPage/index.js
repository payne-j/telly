import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import { useSearch } from "../../context/Search";
import { resultId } from "../../store/search";
import "./TellyPage.css";

function TellyPage() {
  const dispatch = useDispatch();
  const { id } = useSearch();
  useEffect(() => dispatch(searchActions.tellyPage(id)), [id, dispatch]);
  const telly = useSelector(searchActions.resultId);

  return (
    <>
      TELLY PAGE
      <div>{telly.name}</div>
      <div>
        Ratings {telly.city}, {telly.state}
      </div>
      <div>{telly.name}</div>
      <div>{telly.name}</div>
      <div>{telly.name}</div>
    </>
  );
}

export default TellyPage;
