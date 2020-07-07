import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2015"
      name="E•MO•TION"
      artist="Carly Rae Jepsen"
      quote={"I'll be your sinner \n in secret"}
      albumDescription={"CRJ delivers an energetic and effervescent portrayal of love that shines even in spite of the dark hours, brutal truths, and stinging heartaches."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>