import React, { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import ItemList from "./itemList";

export const Search = () => {
  const [showingSearch, setShowingSearch] = useState(false);

  const [query, setQuery] = useState("");
  const { searchResults, loading, error } = useSearch(query);
  const onSearch = (e) => {
    setQuery(e.target.value);
  };

  const showSearchContainer = () => {
    setShowingSearch(!showingSearch);
  };

  return (
    <>
      {showingSearch && (
        <div className={(showingSearch ? "showing " : "") + "search-container"}>
          <input
            className="searchInput"
            type="text"
            value={query}
            onChange={(e) => onSearch(e)}
          />
          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error">Error: {error.message}</div>}
          <ItemList items={searchResults} query={query} />
          <a href="#" onClick={showSearchContainer}>
            <i className="material-icons close">close</i>
          </a>
        </div>
      )}

      {!showingSearch && (
        <div>
          <a href="#" onClick={showSearchContainer}>
            <i className="material-icons search">search</i>
          </a>
        </div>
      )}
    </>
  );
};

export default Search;
