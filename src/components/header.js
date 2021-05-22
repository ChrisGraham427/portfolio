import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "../components/menu"

const Header = () => (
  <header className="header">
    <div className="header__div">
      <Menu />
      <hr className="header__linebreak" />
      <hr className="header__linebreak-black" />
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
