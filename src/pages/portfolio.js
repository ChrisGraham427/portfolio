import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Project = props => (
  <Layout>
    <Seo title="portfolio" />
    <BackgroundImage
      alt="background-hero"
      fluid={props.data.indexImage.childImageSharp.fluid}
      className="background__hero-about"
    >
      <div className="portfolio__container">
        <div>
          <Link to="https://atrezi.herokuapp.com/">
            <StaticImage
              src="../images/Atrezi-logo.png"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Atrezi"
              style={{ maxHeight: 500 }}
            />
          </Link>
          <p>
            Small Scale Project Management for Everyone. Built with React,
            Express, MySQL and Node.js. This CRUD application allows users to
            track project information, contacts, images and tasks.
          </p>
        </div>
        <div>
          <StaticImage
            src="../images/me-ma.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Me & Ma Organic Microgreens"
            style={{ maxHeight: 700 }}
          />
          <p>
            Coming Soon! Me & Ma Organic Microgreens is a Gatsby and Shopify
            based E-Commerce site specializing in GMO Free Organic Microgreen
            growing kits delivered right to your door.
          </p>
        </div>
        <div>
          <Link to="/">
            <StaticImage
              src="../images/cg-main.png"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="hero"
              style={{ maxHeight: 600 }}
            />
          </Link>
          <p>Personal Portfolio site built with Gatsby.</p>
        </div>
      </div>
    </BackgroundImage>
  </Layout>
)

export default Project

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "background2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
