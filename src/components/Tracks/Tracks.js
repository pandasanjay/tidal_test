import React from "react";
import { fmtMSS } from "../../utils/functionUtils";
const Tracks = ({ lists = [], releaseyear = "" }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Released</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.title}</td>
              <td>{data.artist.name}</td>
              <td>{fmtMSS(data.duration)}</td>
              <td>{releaseyear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tracks;
