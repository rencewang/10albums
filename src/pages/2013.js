import React, { useState, useEffect } from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

export default () => {
  const albumMBID = "f6b77446-f07e-4768-bd34-f8baa90b9b4b"
  const albumQuote = "You are what you love \n not who loves you"
  const description = "Fall Out Boy makes a brave, intense tribute to being passionate and young at a time which seemingly makes the former difficult and the latter impossible."
  const albumYear = "2013"
  const detail = "Save Rock And Roll is the fifth studio album by American rock band Fall Out Boy. It was produced by Butch Walker and released April 12, 2013, through Island Records. On October 15, the album was re-released with PAX AM Days, an extended play the band recorded shortly after Save Rock And Roll's release.Save Rock And Roll debuted at number one on the U.S. Billboard 200 with 154,000 first week sales, earning the band its second career number one. Rolling Stone described the band's comeback as a \"rather stunning renaissance\", and the record received positive reviews upon its release"

  const [artistName, setArtistName] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [coverUrl, setUrl] = useState()

  useEffect(() => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=d480a44e0bca768c6231ebdcd3cdbd3e&mbid=${albumMBID}&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then (json => {
        setAlbumName(json.album.name)
        setArtistName(json.album.artist)
        setUrl(json.album.image[3]['#text'].replace("300x300", "600x600"))
      })
  })

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