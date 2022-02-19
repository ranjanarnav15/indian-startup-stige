import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="input-group searchBar mb-4 mt-4">
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          className="form-control searchBarInput"
          placeholder="Search"
        />
      </div>
      <button type="button" className="btn btn-primary ">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Search;
