import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as searchActions from "../../store/search";

import "./HomePage.css";

function Discover() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(searchActions.discover()), [dispatch]);
  const discoveries = useSelector(searchActions.discoverResults);
  return (
    <>
      <ul className="discoveries">
        {discoveries &&
          discoveries?.map((discovery) => (
            <li className="discovery">
              <img src={discovery?.Photos[0]?.imageUrl} alt={discovery?.name} />
              <br />
              {discovery?.name}
              <br />
              {discovery?.city}, {""}
              {discovery?.state}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Discover;
