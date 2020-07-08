import React from "react"
import "../styles/album.sass"
import { siteMetadata } from "../../gatsby-config"

export default () => { 
    return (
        <header className="header-container">
            <div className="header-title">
                 {siteMetadata.title}
            </div>
        </header>
    )
}