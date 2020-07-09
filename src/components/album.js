import React from "react"
import { Helmet } from 'react-helmet'
import { siteMetadata } from "../../gatsby-config"

import Header from "../components/header"
import AlbumYear from "../components/year"
import AlbumName from "../components/name"
import AlbumArtist from "../components/artist"
import AlbumQuote from "../components/quote"
import AlbumCover from "../components/cover"
import Cursor from "../components/cursor"

export default function Album(props) {
  return (
    <Cursor>
      <Helmet>
        <title>{props.year} | {siteMetadata.title}</title>
      </Helmet>
      <main>
        <Header />
        <AlbumYear year={props.year} />
        <AlbumName name={props.name} />
        <AlbumArtist artist={props.artist} />
        <AlbumQuote quote={props.quote} />
        <AlbumCover albumDescription={props.albumDescription} albumCover={props.albumCover} />
      </main>
    </Cursor>
  )
}