import React from "react"
import "../styles/album.sass"

export default function cover(props) {
    return (
        <div className="album-description">
            {props.albumDescription}
            <br/>
            {props.albumDetail}
            <img src={props.albumCover} />
        </div>
    )
  }