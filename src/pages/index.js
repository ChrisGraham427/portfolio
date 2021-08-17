import * as React from "react"
import "../styles/main.css"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => (
  <Layout className="layout__main">
    <Seo title="Home" />
    <BackgroundImage
      alt="background-hero"
      fluid={props.data.indexImage.childImageSharp.fluid}
      className="background__hero"
    >
      <div className="hero__image-div">
        <StaticImage
          className="hero__image"
          src="../images/cg-main.png"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="hero"
         
        />
        <h2 className="hero__image-tagline">Modern Web Development</h2>
      </div>
    </BackgroundImage>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
