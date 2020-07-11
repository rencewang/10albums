import React, { useState, useEffect } from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

export default () => {
  const albumName = "1989 (Deluxe)"
  const artistName = "Taylor Swift"
  const albumQuote = "It's 2AM \n in your car \n Windows down, you pass my street, \n the memories start \n It's 2AM \n in my room \n Headlights pass the window pane, \n I think of you"
  const description = "Taylor Swift produces this meticulously-edited kaleidoscopic story of starting over in New York City with a genre-shifting effort turned global sensation that crowned her as pop royalty."
  const albumYear = "2014"

  const [detail, setDetail] = useState("")
  const [coverUrl, setUrl] = useState()

  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=d480a44e0bca768c6231ebdcd3cdbd3e&artist=${artistName.split(' ').join('+')}&album=${albumName.split(' ').join('+')}&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then (json => {
        const orgDetail = String(json.album.wiki.content)
        setDetail(orgDetail.slice(0, orgDetail.indexOf("<")).replace(/\.([^\s\d])/g, '. $1'))
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
