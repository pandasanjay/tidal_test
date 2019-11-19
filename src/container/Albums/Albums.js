import React from "react";
import { connect } from "react-redux";

import AlbumList from "../../components/AlbumList/AlbumList";
import AlbumDetails from "../../components/AlbumDetails/AlbumDetails";

import "./Albums.scss";

import mapDispatchToProps from "../../redux/actions";
const mapStateToProps = state => ({
  ...state
});

const Albums = ({ app, findAlbumDetailsByArtist }) => {
  return app.albums ? (
    <>
      <div className="search-result-album-section">
        <h4>Search Results for "{app.searchText}"</h4>
        <div className="title-text pad-t-10 pad-b-10">ALBUMS</div>
        <AlbumList list={app.albums} onChange={findAlbumDetailsByArtist} />
        <AlbumDetails details={app.albumsDetails} />
      </div>
    </>
  ) : (
    <></>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Albums);
