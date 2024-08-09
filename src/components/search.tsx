import {fetchProducts, useAppContext} from "@/providers/context-provider";
import React from "react";

const SearchForm: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchProducts(state, dispatch);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "set-search-query", payload: event.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={state.searchQuery}
        onChange={handleInputChange}
        placeholder="Enter search query"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
