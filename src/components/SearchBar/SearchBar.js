import React from "react"
import Autocomplete from "./Autocomplete"
import "./SearchBar.scss"
const SearchBar = (props) => {
    const handelOnChange = (evt) => {
        props.searchAction(evt.target.value)
    }
    return (<>
        <div className="search-bar-section">
            <div className="flex-container">
                <span className="flex flex-grow-8 position-relative">
                    <input
                        type="text"
                        className="search-input-box"
                        placeholder="Search here"
                        onChange={handelOnChange}
                    />
                    <Autocomplete list={[
                        {
                            text: "Prince"
                        },
                        {
                            text: "Prince & The Revolution"
                        },
                        {
                            text: "Prince Royce"
                        }
                    ]} />
                </span>
                <button className="search-bar-button-search">Search</button>
            </div>

        </div>
    </>)
}
export default SearchBar