import React from "react"
import { Helmet } from 'react-helmet'
import { siteMetadata } from "../../gatsby-config"
import Palette, { usePalette } from 'react-palette'

import AlbumCover from "../components/cover"
import Cursor from "../components/cursor"
import "../styles/album.sass"
import "../styles/global.sass"

export default function Album(props) {

  const { data, loading, error } = usePalette(props.albumCover)
  console.log(data.vibrant)
  console.log(data.muted)
  console.log(data.lightVibrant)
  console.log(data.darkVibrant)
  console.log(data.lightMuted)
  console.log(data.darkMuted)

  return (
    <Cursor>
      <Helmet>
        <title>{props.year} | {siteMetadata.title}</title>
      </Helmet>

      <main>
        <div className="main-bg" style={{background: `linear-gradient(to right bottom, ${data.lightVibrant}, ${data.darkMuted})`}}> </div>

        <header className="header-container">
          <div className="header-title">
                {siteMetadata.title}
          </div>

          <div className="big-year">
            {props.year}
        </div>
        </header>
        
        <div className="album-name">
            {props.name.replace("(Deluxe)", "")}
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