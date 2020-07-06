import React from "react"
import Link from "gatsby-link"
import PageYear from "../components/year"

export default () =>
  <div>
    <h1>Hello world!</h1>
    <PageYear year="2010" />
    <Link to="/hi/">hi</Link>
  </div>
