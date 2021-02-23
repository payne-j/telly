import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [guests, setGuests] = useState();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // return dispatch(
    //   sessionActions.search({ location, startDate, endDate, guests })
    // ).catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    // });
  };



  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <input
        type="date"
        value={startDate}
        placeholder="Check in"
        onChange={(e) => setStartDate(e.target.value)}
      ></input>
      <input
        type="date"
        value={endDate}
        placeholder="Check out"
        onChange={(e) => setEndDate(e.target.value)}
      ></input>
      <input
        type="number"
        value={guests}
        placeholder="Guests"
        onChange={(e) => setGuests(e.target.value)}
      ></input>
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
      <div>
        <ul className="errors-list">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default Search;
