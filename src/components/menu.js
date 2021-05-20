import React from "react"
import Link from "gatsby-link"
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome"
import { AiOutlineBook } from "@react-icons/all-files/ai/AiOutlineBook"
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle"
import { AiOutlinePicture } from "@react-icons/all-files/ai/AiOutlinePicture"
import { AiOutlineComment } from "@react-icons/all-files/ai/AiOutlineComment"

const Menu = () => (
  <div className="menu">
    <ul className="menu__navlist">
      <li>
        <AiOutlineHome />
        <Link className="menu__navlist-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <AiOutlineInfoCircle />
        <Link className="menu__navlist-item" to="/page-2/">
          Info
        </Link>
      </li>
      <li>
        <AiOutlinePicture />
        <Link className="menu__navlist-item" to="/portfolio/">
          Portfolio
        </Link>
      </li>
      <li>
        <AiOutlineBook />
        <Link className="menu__navlist-item" to="/resume">
          Resume
        </Link>
      </li>
      <li>
        <AiOutlineComment />
        <Link className="menu__navlist-item" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <AiOutlineComment />
        <Link className="menu__navlist-item" to="/tictactoe">
          Game
        </Link>
      </li>
    </ul>
  </div>
)
export default Menu
