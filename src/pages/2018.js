import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2018"
      name="High as Hope"
      artist="Florence + The Machine"
      quote={"And it's Friday night and it's kicking in \n In that pink dress, they're gonna crucify me \n Oh and you in all your vibrant youth \n How could anything bad ever happen to you?"}
      albumDescription={"Florence Welch pours her heart out in this vulnerable record that converts roaring emotions into subdued tunes that contain nostalgia and life itself."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>