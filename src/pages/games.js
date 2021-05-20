import * as React from "react"
import { Link } from "gatsby"
import TicTacToe from "../components/tictactoe"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GamePage = () => (
  <Layout>
    <Seo title="Resume" />
    <h1>Resume</h1>
    <TicTacToe />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GamePage
