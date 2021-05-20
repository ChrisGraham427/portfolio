import * as React from "react"
import { Link } from "gatsby"
import TicTacToe from "../components/tictactoe"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GamePage = () => (
  <Layout>
    <Seo title="tic-tac-toe" />
    <TicTacToe />
    <Link to="/">Home</Link>
  </Layout>
)

export default GamePage
