import React, { useState, useEffect } from "react"
import Album from "../components/album"

export default () => {
  const albumName = "E•MO•TION"
  const artistName = "Carly Rae Jepsen"
  const albumQuote = "I'll be your sinner, in secret. \n When the lights go out \n Run away with me"
  const description = "CRJ delivers an energetic and effervescent portrayal of love that shines brilliantly in spite of the grim deception, brutal truths, and stinging heartaches that may lie beneath."
  const albumYear = "2015"

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
