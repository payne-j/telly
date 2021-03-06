import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();
export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = tomorrow.toISOString().split("T")[0];

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(tomorrow);
  const [guests, setGuests] = useState(1);
  const [tellyId, setTellyId] = useState();
  const [total, setTotal] = useState();
  const [length, setLength] = useState();

  return (
    <SearchContext.Provider
      value={{
        location,
        setLocation,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        guests,
        setGuests,
        tellyId,
        setTellyId,
        total,
        setTotal,
        length,
        setLength,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
