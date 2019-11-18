import React from "react";
import { fmtMSS } from "../../utils/functionUtils";

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
          <table>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Released</th>
            </tr>
            <tbody>
              {details.tracks.data.map((data, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.artist.name}</td>
                  <td>{fmtMSS(data.duration)}</td>
                  <td>{new Date(details.release_date).getFullYear()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
export default AlbumDetails;
