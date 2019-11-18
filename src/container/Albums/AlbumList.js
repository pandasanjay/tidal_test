import React, { useState } from "react";
const Album = ({ list = [], onSelectAlbum = () => {} }) => {
  const [active, setActive] = useState("");
  const handelClick = id => {
    setActive(id);
    onSelectAlbum(id);
  };
  return (
    <>
      <div className="flex-container scroll">
        {list.map((data, i) => (
          <div
            key={i}
            className={
              "flex text-center album-section " +
              (active === data.id ? "active" : "")
            }
            onClick={() => handelClick(data.id)}
          >
            <img src={data.cover} alt={data.title} />
            <div className="title-text-sm">{data.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Album;
