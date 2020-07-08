import React from "react"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"

import Album from "../components/album"

export default () =>
  <main>
    <Album
      year="2010"
      name="Speak Now"
      artist="Taylor Swift"
      quote={"Long live all the \n mountains we moved \n I had the time of my life \n Fighting dragons with you"}
      albumDescription={"Taylor Swift refuses to be defined by critics and the media with this self-written introspection that captures the complicated rush of teenage and maturity."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>
