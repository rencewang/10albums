import React, {useState, useEffect} from "react"
import "../styles/global.sass"
import $ from "jquery"

function Cursor({ children }) {
    
    // Transferred to album.js 

    // let prevlink, nextlink = ""
    // if (typeof window !== `undefined`) {
    //     const currentNum = isNaN(parseInt((window.location.pathname).replace("/", ""))) ? 0 : parseInt((window.location.pathname).replace("/", ""))
    //     if (currentNum === 0) {
    //         prevlink = "/2019"
    //         nextlink = "/2011"
    //     } else {
    //         prevlink = "/" + (currentNum === 2011 ? "" : currentNum - 1)
    //         nextlink = "/" + (currentNum === 2019 ? "" : currentNum + 1)
    //     }
    // }

    useEffect(() => {
        const links = document.querySelectorAll("a")
        const lightbox = document.querySelector("#cursor-lightbox")
        $("a").mouseenter(() => {
            lightbox.style.transform = "scale(2)"
        })
        $("a").mouseleave(() => {
            lightbox.style.transform = "scale(1)"
        })
    })

    const handleMouseMove = e => {
        if (typeof window !== `undefined` && typeof document !== `undefined`) {
            // for left and right arrow switching
            // const cursor = document.querySelector("#cursor")
            // cursor.classList.remove("cursor-prev", "cursor-next")
            // if (e.clientX > $(window).width() / 2) {
            //     cursor.classList.add("cursor-next")
            // } else {
            //     cursor.classList.add("cursor-prev")
            // }

            // for cursor lightbox
            const lightbox = document.querySelector("#cursor-lightbox")
            lightbox.style.opacity = 1
            lightbox.style.top = `${e.pageY - lightbox.clientHeight / 2}px`
            lightbox.style.left = `${e.pageX - lightbox.clientWidth / 2}px`
        }
    }

    // Clicking for Left / Right ONLY
    const handleClick = e => {
        // if (typeof window !== `undefined`) {
        //     if (e.clientX > $(window).width() / 2) {
        //         window.location = nextlink;
        //     } else {
        //         window.location = prevlink;
        //     }
        // }
    }

    const mouseLeave = () => {
        if (typeof window !== `undefined` && typeof document !== `undefined`) {
            const lightbox = document.querySelector("#cursor-lightbox")
            lightbox.style.opacity = 0
        }
    }

    return (
        <div id="cursor" onMouseMove={handleMouseMove} onClick={handleClick} onMouseLeave={mouseLeave}>
            <div id="cursor-lightbox"></div>
            {children}
        </div>
    )
}

export default Cursor