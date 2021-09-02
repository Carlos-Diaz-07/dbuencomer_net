import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../sass/main.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="columns full-widht is-tablet" id="hero2">
      <div className="column is-half"></div>
      <div className="column is-half" id="hero-text">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </div>
    </div>
    <div className="map">
      <h1>map</h1>
    </div>
  </Layout>
)

export default IndexPage
