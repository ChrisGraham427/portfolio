import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "../components/menu"

const Header = () => (
  <header className="header">
    {" "}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
