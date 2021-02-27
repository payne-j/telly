import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as searchActions from "../../store/search";
import { useSearch } from "../../context/Search";
import "./SearchResults.css";

function SearchResults() {
  const results = useSelector(searchActions.searchResults);
  const { tellyId, setTellyId } = useSearch();
  return (
    <>
      <div>Search Results</div>
      <div>
        <ul>
          {results.map((result, idx) => (
            <li className="search-result" key={result?.tellyId + idx}>
              <div className="search-description">
                {result?.type} in {result?.city}{" "}
              </div>
              <div className="search-name">
                <Link
                  className="search-link"
                  onClick={setTellyId(result.id)}
                  to={`/search/tellies/${tellyId}`}
                >
                  {result.name}
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
