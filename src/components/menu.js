import React from "react"
import Link from "gatsby-link"
const Menu = () => (
  <div className="menu">
    <ul className="menu__navlist">
      <li>
        <Link className="menu__navlist-item" to="/page-2/">
          Info
        </Link>
      </li>
      <li>
        <Link className="menu__navlist-item" to="/portfolio/">
          Portfolio
        </Link>
      </li>
      <li>
        <Link className="menu__navlist-item" to="/resume">
          Resume
        </Link>
      </li>
      <li>
        <Link className="menu__navlist-item" to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </div>
)
export default Menu
