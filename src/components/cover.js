import React from "react"
import "../styles/album.sass"

export default function cover(props) {
    return (
        <div className="album-cover">
            {/* {props.albumDetail} */}
            <img className="album-cover-image" src={props.albumCover} />
        </div>
    )
  }