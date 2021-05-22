import React from "react"
import Link from "gatsby-link"

import { AiOutlineBook } from "@react-icons/all-files/ai/AiOutlineBook"
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle"
import { AiOutlinePicture } from "@react-icons/all-files/ai/AiOutlinePicture"
import { AiOutlineComment } from "@react-icons/all-files/ai/AiOutlineComment"
import { AiOutlineCodeSandbox } from "@react-icons/all-files/ai/AiOutlineCodeSandbox"

const Menu = () => (
  <div className="menu">
    <ul className="menu__navlist">
      <li className="menu__navlist-link">
        <AiOutlineInfoCircle className="menu__navlist-icon" />
        <Link className="menu__navlist-item" to="/page-2/">
          INFO
        </Link>
      </li>
      <li className="menu__navlist-link">
        <AiOutlinePicture className="menu__navlist-icon" />
        <Link className="menu__navlist-item" to="/portfolio/">
          PORTFOLIO
        </Link>
      </li>
      <li className="menu__navlist-link">
        <AiOutlineBook className="menu__navlist-icon" />
        <Link className="menu__navlist-item" to="/resume">
          RESUME
        </Link>
      </li>
      <li className="menu__navlist-link">
        <AiOutlineComment className="menu__navlist-icon" />
        <Link className="menu__navlist-item" to="/blog">
          DISCUSS
        </Link>
      </li>
      <li className="menu__navlist-link">
        <AiOutlineCodeSandbox className="menu__navlist-icon" />
        <Link className="menu__navlist-item" to="/games">
          GAMES
        </Link>
      </li>
    </ul>
  </div>
)
export default Menu
