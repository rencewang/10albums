import React from "react"

import Header from "../components/header"
import AlbumYear from "../components/year"
import AlbumName from "../components/name"
import AlbumArtist from "../components/artist"
import AlbumQuote from "../components/quote"
import AlbumCover from "../components/cover"

export default function Album(props) {
  return (
    <main>
      <Header />
      <AlbumYear year={props.year} />
      <AlbumName name={props.name} />
      <AlbumArtist artist={props.artist} />
      <AlbumQuote quote={props.quote} />
      <AlbumCover albumDescription={props.albumDescription} albumCover={props.albumCover} />
    </main>
  )
}