import * as React from "react"

import TicTacToe from "../components/tictactoe"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GamePage = () => (
  <Layout>
    <Seo title="tic-tac-toe" />
    <TicTacToe />
  </Layout>
)

export default GamePage
