import { useState } from "react";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [guests, setGuests] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <input
        value={startDate}
        placeholder="Check in"
        onChange={(e) => setStartDate(e.target.value)}
      ></input>
      <input
        value={endDate}
        placeholder="Check out"
        onChange={(e) => setEndDate(e.target.value)}
      ></input>
      <input
        value={guests}
        placeholder="Guests"
        onChange={(e) => setGuests(e.target.value)}
      ></input>
    </form>
  );
}

export default Search;
