import React, { useState, useEffect } from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

export default () => {
  const albumMBID = "e1d99364-1ad9-4f4d-9505-2242eff10a44"
  const albumQuote = "This m.A.A.d city I run"
  const description = "Kendrick Lamar takes us on a tour to Compton, California with this cohesive, fundamentally relatable story that transcends racial boundaries."
  const albumYear = "2012"

  const [artistName, setArtistName] = useState("")
  const [detail, setDetail] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [coverUrl, setUrl] = useState()

  useEffect(() => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=d480a44e0bca768c6231ebdcd3cdbd3e&mbid=${albumMBID}&format=json`)
      .then(response => {
        return response.json()
      })
      .then (json => {
        const orgDetail = String(json.album.wiki.content)
        setDetail(orgDetail.slice(0, orgDetail.indexOf("<")).replace(/\.([^\s\d])/g, '. $1'))
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
