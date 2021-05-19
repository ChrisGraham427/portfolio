import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ResumePage = () => (
  <Layout>
    <Seo title="Resume" />
    <h1>Resume</h1>
    <StaticImage
      src="../images/cg-resume.jpg"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Resume"
      style={{ marginBottom: `1.45rem` }}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ResumePage
