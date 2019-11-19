import React from "react";
import { connect } from "react-redux";

import Autocomplete from "../../components/Autocomplete/Autocomplete";
import "./SearchBar.scss";

import mapDispatchToProps from "../../redux/actions";
const mapStateToProps = state => ({
  ...state
});

const SearchBar = props => {
  const handelOnChange = evt => {
    props.searchAction(evt.target.value);
  };
  return (
    <>
      <div className="search-bar-section">
        <div className="flex-container">
          <span className="flex flex-grow-8 position-relative">
            <input
              type="text"
              className="search-input-box"
              placeholder="Search here"
              onChange={handelOnChange}
            />
            <Autocomplete
              list={props.app.autocomplete}
              onClickAction={props.findAlbumOfArtist}
            />
          </span>
          <button className="search-bar-button-search">Search</button>
        </div>
      </div>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
