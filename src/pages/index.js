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
  const [coverUrl, setUrl] = useState("http://placekitten.com/300/200")

  useEffect(() => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=d480a44e0bca768c6231ebdcd3cdbd3e&mbid=${albumMBID}&format=json`)
      .then(response => {
        return response.json()
      })
      .then (json => {
        const processedDetail = String(json.album.wiki.content)
        setDetail(processedDetail.slice(0, processedDetail.indexOf("<")))
        console.log(json.album.wiki.content)
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
