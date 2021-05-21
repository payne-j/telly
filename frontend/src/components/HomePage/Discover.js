import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as searchActions from "../../store/search";

import "./HomePage.css";

function Discover() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(searchActions.discover()), [dispatch]);
  const discovery = useSelector(searchActions.discoverResults);
  return (
    <>
      <ul className="discoveries">
        <li className="discovery">{discovery?.name}</li>
        <li className="discovery">Telly 2</li>
        <li className="discovery">Telly 3</li>
        <li className="discovery">Telly 4</li>
        <li className="discovery">Telly 5</li>
      </ul>
    </>
  );
}

export default Discover;
