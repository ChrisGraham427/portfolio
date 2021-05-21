import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = props => (
  <Layout>
    <Seo title="About Me" />
    <BackgroundImage
      alt="background-hero"
      fluid={props.data.indexImage.childImageSharp.fluid}
      className="background__hero-about"
    >
      <div className="info__container">
        <h1 className="info__title">About Me</h1>
        <StaticImage
          src="../images/profile.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="hero"
          style={{
            maxWidth: 800,
          }}
        />
        <p className="info__bio">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <p className="info__bio">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham
        </p>
      </div>
    </BackgroundImage>
  </Layout>
)

export default SecondPage

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
