import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2017"
      name="Melodrama"
      artist="Lorde"
      quote={"Maybe we just \n do it violently"}
      albumDescription={"Lorde’s idea of youth is acute, complete, and unconditional. Perhaps it’s imperfect, but the stubborn, tenacious, yet sinister vitality is precious and impossible to compound."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>