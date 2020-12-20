import React from "react";
import ReactStars from "react-rating-stars-component";
import './search.css'


const Search = ({ searchbytitle, searchbyrate }) => {
  const ratingstarts = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 0,
    color: "gray",
    activeColor: "yellow",
    onChange: (newvalue) => {
      searchbyrate(newvalue);
    },
  };

  return (
    <div>
    <div
      style={{ backgroundColor: "black", fontSize: 16, padding: 40 }}
    >
      <form className="search">
        <div className="searchingalign">
          <label className="titlelabel"> Filter by Title </label>
          <input
            className="searchingform"
            type="text"
            placeholder="search here..."
            onChange={(e) => searchbytitle(e.target.value)}
          />
        </div>
        <div className="ratingalign">
           <label className="ratelabel"> Filter by Rate </label>
          <span className="stars">
            <ReactStars {...ratingstarts} />
          </span>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Search;