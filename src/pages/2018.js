import React, { useState, useEffect } from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

export default () => {
  const albumName = "High As Hope"
  const artistName = "Florence + The Machine"
  const albumQuote = "Oh and you in all your vibrant youth \n How could anything bad ever happen to you?"
  const description = "Florence Welch pours her heart out in this vulnerable record that converts roaring emotions into subdued tunes that contain nostalgia and life itself."
  const albumYear = "2018"
  const detail = "High as Hope is the fourth studio album by the English indie rock band Florence + the Machine, released on 29 June 2018 by Republic Records and Virgin EMI Records. It was preceded by the singles \"Sky Full of Song\", \"Hunger\" and \"Big God\". The album was executively produced by Florence Welch herself, along with Emile Haynie. Following How Big, How Blue, How Beautiful (2015), \"High As Hope\" features more minimalist, stripped-down productions, and explores themes of heartache, family, and finding comfort in loneliness. The album received positive reviews upon release, with music critics lauding Welch's vocal performance and personal lyricism."
  const coverUrl = "https://lastfm.freetls.fastly.net/i/u/770x0/ad20fc22f42ef2fdae2fc99273f9f01f.webp#ad20fc22f42ef2fdae2fc99273f9f01f"

  return (
    <main>
      <Album
        year={albumYear}
        name={albumName}
        artist={artistName}
        quote={albumQuote}
        albumDescription={description}
        albumCover={coverUrl}
        albumDetail={detail}
      />
    </main>
  )
}
