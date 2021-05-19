import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Project = () => (
  <Layout>
    <Seo title="portfolio" />
    <Link to="/">
      <StaticImage
        src="../images/cg-hero.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="hero"
        style={{ marginBottom: `1.45rem` }}
      />
    </Link>
    <Link to="https://atrezi.herokuapp.com/">
      <StaticImage
        src="../images/Atrezi-logo.png"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Atrezi"
        style={{ marginBottom: `1.45rem` }}
      />
    </Link>
  </Layout>
)

export default Project
