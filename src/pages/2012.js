import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2012"
      name="GOOD KID, M.A.A.D CITY"
      artist="Kendrick Lamar"
      quote={"This m.A.A.d city I run"}
      albumDescription={"Kendrick Lamar takes us on a tour to Compton, California with this cohesive, fundamentally relatable story that transcends racial boundaries."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>