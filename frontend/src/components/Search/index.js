import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as searchActions from "../../store/search";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const suggestions = useSelector(searchActions.autocomplete);

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [guests, setGuests] = useState();
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // return dispatch(
    //   searchActions.search({ location, startDate, endDate, guests })
    // ).catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    // });
  };

  useEffect(() => {
    dispatch(searchActions.search(location));
  }, [location, dispatch]);
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
        list="autocomplete"
      />
      <datalist className="suggestion-list" id="autocomplete">
        {suggestions &&
          suggestions.map((suggestion) => (
            <option
              className="suggestions"
              id={suggestion.id}
              value={suggestion.name}
              key={suggestion.id}
            >
              {suggestion.name}
            </option>
          ))}
      </datalist>
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
