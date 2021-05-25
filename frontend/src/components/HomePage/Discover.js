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
              <div>
                <img
                  className="discovery_photos"
                  src={discovery?.Photos[0]?.imageUrl}
                  alt={discovery?.name}
                />
              </div>
              <div>{discovery?.name}</div>
              <div>
                {discovery?.city}, {""}
                {discovery?.state}
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Discover;
