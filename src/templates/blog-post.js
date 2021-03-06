import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Gitalk from "gatsby-plugin-gitalk"
import "@suziwen/gitalk/dist/gitalk.css"
export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <>
      <div className="blog__post">
        <Link to="/blog">
          <button>Developer Discussion</button>
        </Link>
        <h2>{post.frontmatter.title}</h2>
        <h4>
          Contributed by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
