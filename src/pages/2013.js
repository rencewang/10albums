import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2013"
      name="Save Rock and Roll"
      artist="Fall Out Boy"
      quote={"You are what you love \n not who loves you"}
      albumDescription={"Fall Out Boy makes a brave, intense tribute to being passionate and young at a time which seemingly makes the former difficult and the latter impossible."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>