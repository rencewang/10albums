import React from "react"
import "../styles/album.sass"

function quote(props) {
    return (
        <div className="album-quote">
            {props.quote.split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;
            })}
        </div>
    )
}

export default quote