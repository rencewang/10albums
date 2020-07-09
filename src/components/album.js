import React from "react"
import { Helmet } from 'react-helmet'
import { siteMetadata } from "../../gatsby-config"
import Palette, { usePalette } from 'react-palette'

import AlbumCover from "../components/cover"
import Cursor from "../components/cursor"
import "../styles/album.sass"

export default function Album(props) {

  const ColorThief = require('colorthief');


  // const albumImg = props.albumCover

  // const { data, loading, error } = usePalette(src, colorCount, format, { crossOrigin, quality})

  // Color.getColor(img)
  //   .then(color => { console.log(color) })
  //   .catch(err => { console.log(err) })

  const { data, loading, error } = usePalette(props.albumCover)


  return (
    <Cursor>
      <Helmet>
        <title>{props.year} | {siteMetadata.title}</title>
      </Helmet>

      {/* <Palette src="https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png">
        {({ data, loading, error }) => (
          <div style={{ color: data.vibrant }}>
            Text with the vibrant color
          </div>
        )}
      </Palette> */}

      <main>
        <div className="main-bg" style={{background: `linear-gradient(to right bottom, ${data.lightVibrant}, ${data.darkMuted})`}}> </div>

        {data.vibrant}
        {data.muted}

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