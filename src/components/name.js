import React from "react"
import "../styles/album.sass"

export default (props) => {
    return (
        <div className="album-name">
            {props.name}
        </div>
    )
  }