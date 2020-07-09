import React, { useState, useEffect } from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

export default () => {
  const albumName = "Norman Fucking Rockwell!"
  const artistName = "Lana Del Rey"
  const albumQuote = "I'm a fuckin' mess, but I \n Oh, thanks for the high life \n Baby, it's the best, passed the test and yes"
  const description = "Lana Del Rey is heralded as the \"Next Best American Songwriter\" with a personal masterpiece of unfiltered hope and desperation that brings out the best and worst of our time."
  const albumYear = "2019"

  const [detail, setDetail] = useState("")
  const [coverUrl, setUrl] = useState()

  useEffect(() => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=d480a44e0bca768c6231ebdcd3cdbd3e&artist=${artistName.split(' ').join('+')}&album=${albumName.split(' ').join('+')}&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then (json => {
        const orgDetail = String(json.album.wiki.content)
        setDetail(orgDetail.slice(0, orgDetail.indexOf("[")).replace(/\.([^\s\d])/g, '. $1'))
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
