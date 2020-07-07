import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2016"
      name="Lemonade"
      artist="Beyoncé"
      quote={"Dishes smashed on my counter \n from our last encounter"}
      albumDescription={"Beyonce shows what it is like being black, a woman, a daughter, a wife, through an almost contradictory exploration that ultimately proves she’s got it all."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>