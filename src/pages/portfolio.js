import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Project = () => (
  <Layout>
    <Seo title="portfolio" />
    <StaticImage
      src="../images/cg-hero.jpg"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="hero"
      style={{ marginBottom: `1.45rem` }}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Project
