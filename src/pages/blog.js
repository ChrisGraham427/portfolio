import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <div className="blog__container">
      <h1>Developer Discussion</h1>
      <p className="blog__description">
        A collection of my thoughts as I learn about development, I'll write
        about the ups, the downs, the fails and the wins. It's all about the
        journey with this one, so follow along and feel free to comment I would
        love to hear everyone else's thoughts.
      </p>
      {data.allMarkdownRemark.edges.map(post => (
        <div className="blog__post-box" key={post.node.id}>
          <h3 className="blog__post-title">{post.node.frontmatter.title}</h3>
          <small className="blog__small">
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <Link to={post.node.frontmatter.path}>
            <button className="blog__button-readmore">Read More</button>
          </Link>
        </div>
      ))}

      <Link to="/">
        <button className="blog__button-goback">HOME</button>
      </Link>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
