import React, { useState, useEffect } from "react"
import Album from "../components/album"

export default () => {
  const albumName = "Melodrama"
  const artistName = "Lorde"
  const albumQuote = "Now we sit in your car \n and our love is a ghost \n Well I guess I should go \n Yeah I guess I should go"
  const description = "Lorde’s idea of youth is acute, complete, and unconditional. Perhaps it’s imperfect, but the stubborn, tenacious, yet sinister vitality is precious and impossible to compound."
  const albumYear = "2017"

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
