import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import PageNotFound from "./components/PageNotFound";
import Search from "./components/Search";
import SearchResults from "./components/SearchResultsPage";
import TellyPage from "./components/TellyPage";
import { useSearch } from "./context/Search";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const { location, startDate, endDate, guests, tellyId } = useSearch();

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Search />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route
          path={`/search/${location}/${startDate}/${endDate}/${guests}`}
          exact
        >
          <SearchResults />
        </Route>
        <Route path={`/search/tellies/${tellyId}`} exact>
          <TellyPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
