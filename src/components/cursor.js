import React, {useState, useEffect} from "react"
import "../styles/global.sass"
import $ from "jquery"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


function Cursor({ children }) {
    
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

    const handleMouseMove = e => {
        if (typeof window !== `undefined` && typeof document !== `undefined`) {
            const cursor = document.querySelector("#cursor")
            cursor.classList.remove("cursor-prev", "cursor-next")
            if (e.clientX > $(window).width() / 2) {
                cursor.classList.add("cursor-next")
            } else {
                cursor.classList.add("cursor-prev")
            }
        }
    }

    const handleClick = e => {
        if (typeof window !== `undefined`) {
            if (e.clientX > $(window).width() / 2) {
                window.location = nextlink;
            } else {
                window.location = prevlink;
            }
        }
    }

    return (
        <div id="cursor" onMouseMove={handleMouseMove} onClick={handleClick}>
            {children}
        </div>
    )
}

export default Cursor