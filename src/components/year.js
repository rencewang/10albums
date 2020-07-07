import React from "react"
import "../styles/album.sass"

export default function PageYear(props) {
    return (
        <div className="big-year">
            {props.year}
        </div>
    )
  }