import React from "react"
import Album from "../components/album"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


export default () => 
  <main>
    <Album
      year="2019"
      name="Norman Fucking Rockwell!"
      artist="Lana Del Rey"
      quote={"I'm a fuckin' mess, but I \n Oh, thanks for the high life \n Baby, it's the best, passed the test and yes"}
      albumDescription={"Lana Del Rey is heralded as the \"Next Best American Songwriter\" with a personal masterpiece of unfiltered hope and desperation that brings out the best and worst of our time."}
      albumCover="http://placekitten.com/300/200"
    />
  </main>