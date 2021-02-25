import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import "./TellyPage.css";

function TellyPage() {
  const telly = useSelector(searchActions.tellyPage);

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
