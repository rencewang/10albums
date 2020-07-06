import React from "react"

export default function PageYear(props) {
    return (
        <div style={{ 
            margin: `20px auto 5px 20px`, 
            maxWidth: 650, 
            padding: `0 1rem`, 
            fontFamily: `Serif` 
        }}>
            {props.year}
        </div>

    )
  }