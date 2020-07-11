import React, {useEffect} from "react"
import { Helmet } from 'react-helmet'
import { siteMetadata } from "../../gatsby-config"
import { usePalette } from 'react-palette'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import AlbumCover from "../components/cover"
import Cursor from "../components/cursor"
import "../styles/album.sass"
import "../styles/global.sass"

export default function Album(props) {

  useEffect(() => {
    const titleClass = document.querySelector("#album-name")
    const titleName = props.name
    const width = window.innerWidth
    if (width < 1600 && width > 750) {
      if (/^\d+$/.test(titleName)) {
        titleClass.style.fontSize = '28vw'
      } else if (!titleName.includes(" ") && !titleName.includes("•")) {
        titleClass.style.fontSize = '13.5vw'
      } else if (titleName.length > 15) {
        titleClass.style.fontSize = '15vw'
      } else {
        titleClass.style.fontSize = '21vw'
      }
    }
  });

  // primary colors of album cover returned
  const { data, loading, error } = usePalette(props.albumCover)
  console.log(data.vibrant)
  console.log(data.muted)
  console.log(data.lightVibrant)
  console.log(data.darkVibrant)
  console.log(data.lightMuted)
  console.log(data.darkMuted)

  let prevlink, nextlink = ""
  if (typeof window !== `undefined`) {
      const currentNum = isNaN(parseInt((window.location.pathname).replace("/", ""))) ? 0 : parseInt((window.location.pathname).replace("/", ""))
      if (currentNum === 0) {
          prevlink = "/2019"
          nextlink = "/2011"
      } else {
          prevlink = "/" + (currentNum === 2011 ? "" : currentNum - 1)
          nextlink = "/" + (currentNum === 2019 ? "" : currentNum + 1)
      }
  }

  return (
    <Cursor>
      <Helmet>
        <title>{props.year} | {siteMetadata.title}</title>
      </Helmet>

      <main>
        <div className="main-bg" style={{background: `linear-gradient(to right bottom, ${data.lightVibrant}, ${data.darkMuted})`}}></div>
        <div className="album-container">

          <header className="header-container">
            <div className="header-text">
                  {siteMetadata.title}
            </div>

            <div className="header-text">
              {props.year}
            </div>
          </header>
          
          <div className="album-name-container">
            <div id="album-name">
              {props.name.replace("(Deluxe)", "")}
            </div>
          </div>

          <div className="album-quote">
              {props.quote.split("\n").map((i,key) => {
                  return <div key={key}>{i}</div>;
              })}
          </div>

          <div className="album-description">
            {props.albumDescription}
          </div>

          <AlbumCover albumCover={props.albumCover} albumDetail={props.albumDetail}/>

          <footer className="footer-nav">
            <AniLink swipe direction="right" swipe top="entry" to={prevlink} hex="#663399" entryOffset={80} duration={1}>
              PREV
            </AniLink>
            <span> </span>/<span> </span>
            <AniLink swipe direction="left" swipe top="entry" to={nextlink} hex="#663399" entryOffset={80} duration={1}>
              NEXT
            </AniLink>
          </footer>

        </div>
      </main>
    </Cursor>
  )
}