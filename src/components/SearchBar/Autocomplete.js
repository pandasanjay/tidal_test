import React from "react"

const Autocomplete = ({ list = [] }) => {

    return list.length ? (
        <div className="auto-complete-section">
            <div className="pad-6"> Search Results </div>
            <ul className="auto-complete-list">
                {list.map((item) => <li> {item.text} </li>)}
            </ul>
        </div>
    ) : <></>
}

export default Autocomplete;