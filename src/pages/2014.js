import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2014"
      name="1989"
      artist="Taylor Swift"
      quote={"When the sun came up \n I was looking at you"}
      albumDescription={"Taylor Swift produces this meticulously-edited kaleidoscopic story of starting over in New York City with a genre-shifting effort turned global sensation that crowned her as pop royalty."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>