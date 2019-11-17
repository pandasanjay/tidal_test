import React from "react"
import "./Column.scss"
const Column = (props) => {
    return <div className="grid-column">{props.children}</div>
}
export default Column