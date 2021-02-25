import { useDispatch, useSelector } from "react-redux";
import * as searchActions from "../../store/search";
import "./SearchResults.css";

function SearchResults() {
  const results = useSelector(searchActions.searchResults);

  return (
    <>
      <div>Search Results</div>
      <div>
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchResults;
