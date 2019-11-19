import React from "react";
import Tracks from "../Tracks/Tracks";
import "./AlbumDetails.scss";

const AlbumDetails = ({ details = {} }) => {
  return Object.keys(details).length ? (
    <>
      <div className="album-details-section flex-container">
        <div className="flex no-margin field-section">
          <img className="album-img" src={details.cover} alt="sss" />
          <div className="hide-section"></div>
        </div>
        <div className="flex flex-grow-8 no-margin">
          <div className="title-text pad-t-10 pad-b-10">{details.title}</div>
          <Tracks
            lists={details.tracks.data}
            releaseyear={new Date(details.release_date).getFullYear()}
          />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
export default AlbumDetails;
