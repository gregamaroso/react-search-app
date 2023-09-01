import { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";

export const useSearch = (query, delay = 300) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce the search function for better performance
  const debouncedSearch = debounce(async (query) => {
    // Don't search if the query is less than 3 characters
    if (query.length < 3) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3035/search?q=${query}`,
      );
      setSearchResults(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, delay);

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    } else {
      setSearchResults([]);
    }

    // Cleanup function to cancel any pending requests
    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  return { searchResults, loading, error };
};

export default useSearch;
