import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSearch } from "../../context/Search";
import * as searchActions from "../../store/search";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const suggestions = useSelector(searchActions.searchResults);
  const {
    location,
    setLocation,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    guests,
    setGuests,
  } = useSearch();

  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    return dispatch(
      searchActions.availability(location, startDate, endDate, guests)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    }, history.push(`/search/${location}/${startDate}/${endDate}/${guests}`));
  };

  useEffect(() => {
    dispatch(searchActions.search(location));
  }, [location, dispatch]);
  return (
    <>
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
                value={suggestion.streetAddress}
                key={suggestion.id}
              ></option>
            ))}
          {suggestions &&
            suggestions.map((suggestion) => (
              <option
                className="suggestions"
                value={suggestion.city}
                key={suggestion.id}
              ></option>
            ))}
          {suggestions &&
            suggestions.map((suggestion) => (
              <option
                className="suggestions"
                value={suggestion.zip}
                key={suggestion.id}
              ></option>
            ))}
          {suggestions &&
            suggestions.map((suggestion) => (
              <option
                className="suggestions"
                value={suggestion.state}
                key={suggestion.id}
              ></option>
            ))}
          {suggestions &&
            suggestions.map((suggestion) => (
              <option
                className="suggestions"
                value={suggestion.name}
                key={suggestion.id}
              ></option>
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
      </form>
    </>
  );
}

export default Search;
