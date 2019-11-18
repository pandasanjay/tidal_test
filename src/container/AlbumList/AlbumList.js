import React from "react";
import "./AlbumList.scss";
import Album from "./Album";
import AlbumDetails from "./AlbumDetails";
const AlbumList = props => {
  return (
    <>
      <div className="search-result-album-section">
        <h4>Search Results for "{props.appReducer.searchText}"</h4>
        <div className="title-text pad-t-10 pad-b-10">ALBUMS</div>
        <Album
          list={props.appReducer.albums}
          onSelectAlbum={props.findAlbumDetailsByArtist}
        />
        <AlbumDetails details={props.appReducer.albumsDetails} />
      </div>
    </>
  );
};
export default AlbumList;
