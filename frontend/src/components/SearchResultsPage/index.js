import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import { useSearch } from "../../context/Search";
import "./SearchResults.css";

function SearchResults() {
  const dispatch = useDispatch();
  const results = useSelector(searchActions.searchResults);
  const { id, setId } = useSearch();


  return (
    <>
      <div>Search Results</div>
      <div>
        <ul>
          {results.map((result) => (
            <li className="search-result" key={result.id}>
              <div className="search-description">
                {result.type} in {result.city}{" "}
              </div>
              <div className="search-name">
                <Link
                  className="search-link"
                  onClick={setId(result.id)}
                  to={`/search/tellies/${id}`}
                >
                  {result.name}
                  {/* //TODO: add photo query */}
                  <span className="result-photo">{result.photos}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchResults;
