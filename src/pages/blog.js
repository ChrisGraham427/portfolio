import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gitalk from "gatsby-plugin-gitalk"
import "@suziwen/gitalk/dist/gitalk.css"
export default function BlogPage({ data }) {
  const post = data.markdownRemark
  return (
    <Layout className="layout__main">
      <Seo title="Blog" />
      <div className="blog__container">
        <h1>Developer Discussion</h1>
        <p className="blog__description">
          A collection of my thoughts as I learn about development, I'll write
          about the ups, the downs, the fails and the wins.
        </p>
        <p className="blog__description">
          From career transition to learning my first HTML tag syntax, this
          discussion will explore my journey into the vast world of development.
        </p>
        <p className="blog__description"></p>
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
}
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
