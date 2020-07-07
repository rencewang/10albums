import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () =>
  <main>
    <Album
      year="2011"
      name="21"
      artist="Adele"
      quote={"Nothing compares \n no worries or cares. \n Regrets and mistakes \n are memories made."}
      albumDescription={"Adele brought a seismic shift in pop with the sad-ballad-collection that felt more 27 or 30 than 21, because it was that much more mature and haunting."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>