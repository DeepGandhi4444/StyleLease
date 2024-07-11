import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { HitItems } from "../data/Products";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const data = HitItems;

  useEffect(() => {
    if (data && data.length > 0 && searchTerm !== "") {
      const fuse = new Fuse(data, {
        keys: ["name"],
      });
      const results = fuse.search(searchTerm);
      setSearchResults(results);
      console.log("result:" + results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, data]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionSubmit = (event) => {
    setSearchTerm("");
  };

  return (
    <>
      <form action="/one">
        <input
          type="text"
          placeholder="Search"
          required=""
          maxLength={22}
          autoComplete="off"
          value={searchTerm}
          onChange={handleSearch}
        />
        <input type="submit" value=" " />
      </form>
      <div
        className="search-output "
        style={{
          backgroundColor: "white",
          padding: "3px",
          borderRadius: "5px",
        }}
      >
        {searchResults.map((result) => (
          <div
            className="output  "
            style={{
              display: "flex",
              border: "1px solid lightgrey",
              padding: "3px",
              borderTop:"0px",
            }}
          >
            <div className="ml-3 pt-1.5">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <Link to="/one">
              <div
                className={`ml-5 h-10 pt-1.5 `}
                onClick={handleSuggestionSubmit}
              >
                {result.item.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Search;
