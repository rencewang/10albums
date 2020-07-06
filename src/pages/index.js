import React from "react"
import Link from "gatsby-link"
import PageYear from "../components/year"
import Layout from "../components/layout"


export default () =>
  <div>
    <Layout>
      <h1>Hello world!</h1>
      <PageYear year="2010" />
      <Link to="/hi/">hi</Link>
    </Layout>

  </div>
