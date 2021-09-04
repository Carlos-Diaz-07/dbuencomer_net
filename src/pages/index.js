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
    <div className="map columns" id="map-section">
      <div id="map-text" className="column has-text-centered is-one-quarter">
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
      </div>
      <iframe
        className="column is-three-quarters"
        id="map-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.9530686832904!2d-15.475245584703776!3d27.99533221938326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40973e7f7f940b%3A0x53d3bc29a9f1b888!2sD%C2%B4Buen%20Comer%2C%20comidas%20caseras!5e0!3m2!1sen!2suk!4v1630753832876!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </Layout>
)

export default IndexPage
