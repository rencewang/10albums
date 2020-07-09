import React, { useState, useEffect } from "react"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

import Album from "../components/album"

export default () => {
  const albumMBID = "829d9e28-e7a8-4f91-a21a-1eef17da356d"
  const albumQuote = "Long live all the \n mountains we moved \n I had the time of my life \n Fighting dragons with you"
  const description = "Taylor Swift refuses to be defined by critics and the media with this self-written introspection that captures the complicated rush of teenage and maturity."
  const albumYear = "2010"

  const [artistName, setArtistName] = useState("")
  const [detail, setDetail] = useState("")
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
