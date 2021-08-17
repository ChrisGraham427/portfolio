import React from "react"
import Link from "gatsby-link"
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome"
const HeroContact = () => {
  return (
    <>
      <hr className="herocontact__line-black" />
      <hr className="herocontact__line" />
      <div className="herocontact">
        <div className="herocontact__section">
          <h3 className="herocontact__title">Home</h3>
          <Link className="herocontact__link" to="/">
            <AiOutlineHome className="herocontact__icon--home" />
          </Link>
          <p className="herocontact__link-title">chrisgraham.dev</p>
        </div>
        <div className="herocontact__section">
          <h3 className="herocontact__title">GitHub</h3>
          <Link
            className="herocontact__link"
            to="https://github.com/ChrisGraham427"
          >
            <AiOutlineGithub className="herocontact__icon--github" />
          </Link>
          <p className="herocontact__link-title">ChrisGraham427</p>
        </div>
        <div className="herocontact__section">
          <h3 className="herocontact__title">LinkedIn</h3>
          <Link
            className="herocontact__link"
            to="https://www.linkedin.com/in/chriswgraham"
          >
            <AiOutlineLinkedin className="herocontact__icon--linkedin" />
          </Link>
          <p className="herocontact__link-title">Chris W Graham</p>
        </div>
        <div className="herocontact__section">
          <h3 className="herocontact__title">Email</h3>
          <Link className="herocontact__link" href="mailto:cwg.427gmail.com">
            <AiOutlineMail className="herocontact__icon--email" />
          </Link>
          <p className="herocontact__link-title">cwg.427@gmail.com</p>
        </div>
      </div>
      {/* <hr className="herocontact__line" /> */}
      {/* <hr className="herocontact__line-black" /> */}
    </>
  )
}

export default HeroContact
