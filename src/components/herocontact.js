import React from "react"
import Link from "gatsby-link"
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
const HeroContact = () => {
  return (
    <>
      <hr className="herocontact__line-black" />
      <hr className="herocontact__line" />
      <div className="herocontact">
        <div className="herocontact__section">
          <h3 className="herocontact__title">GitHub</h3>
          <Link to="https://github.com/ChrisGraham427">
            <AiOutlineGithub className="herocontact__icon" />
          </Link>
          <p className="herocontact__link-title">ChrisGraham427</p>
        </div>
        <div className="herocontact__section">
          <h3 className="herocontact__title">LinkedIn</h3>
          <Link to="https://www.linkedin.com/in/chriswgraham">
            <AiOutlineLinkedin className="herocontact__icon" />
          </Link>
          <p className="herocontact__link-title">Chris W Graham</p>
        </div>
        <div className="herocontact__section">
          <h3 className="herocontact__title">Email</h3>
          <AiOutlineMail className="herocontact__icon" />
          <a
            className="herocontact__link-title"
            href="mailto:cwg.427@gmail.com"
          >
            cwg.427@gmail.com
          </a>
        </div>
      </div>
      <hr className="herocontact__line" />
      <hr className="herocontact__line-black" />
    </>
  )
}

export default HeroContact
