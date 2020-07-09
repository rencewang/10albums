import React, {useState, useEffect} from "react"
import "../styles/global.sass"
import $ from "jquery"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"


function Cursor({ children }) {

    const halfWidth = typeof window !== `undefined` ? $(window).width() / 2 : null
    const currentPath = typeof window !== `undefined` ? window.location.pathname : null
    const currentNum = isNaN(parseInt((currentPath).replace("/", ""))) ? 0 : parseInt((currentPath).replace("/", ""))
    let prevlink, nextlink = ""
    if (currentNum === 0) {
        prevlink = "/2019"
        nextlink = "/2011"
    } else {
        prevlink = "/" + (currentNum === 2011 ? "" : currentNum - 1)
        nextlink = "/" + (currentNum === 2019 ? "" : currentNum + 1)
    }

    const handleMouseMove = e => {
        const cursor = typeof document !== `undefined` ? document.querySelector("#cursor") : null
        cursor.classList.remove("cursor-prev", "cursor-next")
        if (e.clientX > halfWidth) {
            cursor.classList.add("cursor-next")
        } else {
            cursor.classList.add("cursor-prev")
        }
    }

    const handleClick = e => {
        if (typeof window !== `undefined`) {
            if (e.clientX > halfWidth) {
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