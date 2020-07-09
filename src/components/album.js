import React from "react"
import { Helmet } from 'react-helmet'
import { siteMetadata } from "../../gatsby-config"

import AlbumCover from "../components/cover"
import Cursor from "../components/cursor"

export default function Album(props) {
  return (
    <Cursor>
      <Helmet>
        <title>{props.year} | {siteMetadata.title}</title>
      </Helmet>
      <main>

        <header className="header-container">
          <div className="header-title">
                {siteMetadata.title}
          </div>
        </header>
        
        <div className="big-year">
            {props.year}
        </div>
        
        <div className="album-name">
            {props.name}
        </div>
        
        <div className="artist">
            {props.artist}
        </div>

        <div className="album-quote">
            {props.quote.split("\n").map((i,key) => {
                return <div key={key}>{i}</div>;
            })}
        </div>

        <div className="album-description">
          {props.albumDescription}
        </div>

        <AlbumCover albumCover={props.albumCover} albumDetail={props.albumDetail}/>

      </main>
    </Cursor>
  )
}