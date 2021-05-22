import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ResumePage = props => (
  <BackgroundImage
    alt="background-hero"
    fluid={props.data.indexImage.childImageSharp.fluid}
    className="background__hero"
  >
    <Layout>
      <Seo title="Resume" />
      <div className="resume__container">
        <h1 className="resume__title">Resume</h1>
        <StaticImage
          src="../images/cg-resume.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Resume"
          className="resume__image"
          style={{ maxWidth: 1500, maxHeight: 1800 }}
        />
        <Link to="/">
          <button className="resume__button">HOME</button>
        </Link>
      </div>
    </Layout>
  </BackgroundImage>
)

export default ResumePage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
