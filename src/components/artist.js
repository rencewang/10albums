import React from "react"
import "../styles/album.sass"

export default (props) => {
    return (
        <div className="artist">
            {props.artist}
        </div>
    )
  }