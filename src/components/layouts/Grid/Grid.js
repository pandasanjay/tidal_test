import React from "react"
import "./Grid.scss"

const Grid = (props) => {
    return <div className={`grid-container`}> {props.children}</div >
}
export default Grid