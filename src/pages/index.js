import * as React from "react"
import "../styles/main.css"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" />
    <BackgroundImage
      alt="background-hero"
      fluid={props.data.indexImage.childImageSharp.fluid}
      className="background__hero"
    >
      <StaticImage
        className="hero__image"
        src="../images/cg-main.png"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="hero"
      />
    </BackgroundImage>
  </Layout>
)

export default IndexPage

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
