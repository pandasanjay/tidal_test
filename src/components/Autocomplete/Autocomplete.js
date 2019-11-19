import React from "react";

const Autocomplete = ({ list = [], onClickAction = () => {} }) => {
  return list.length ? (
    <div className="auto-complete-section">
      <div className="pad-6"> Search Results </div>
      <ul className="auto-complete-list">
        {list.map((item, i) => (
          <li key={i} onClick={() => onClickAction(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default Autocomplete;
