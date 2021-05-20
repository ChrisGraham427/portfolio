import React, { Component } from "react"
import Layout from "./layout"
import Seo from "./seo"
import GameStatus from "./gamestatus"
class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
    }
  }
  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ]
    this.checkMatch(winLines)
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index]
      let board = this.state.board
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert("You Won")
        this.setState({
          winner: this.state.player,
        })
      }
    }
  }
  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board
      if (this.state.board[index] === null && !this.state.winner) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
        })
        this.checkWinner()
      }
    }
  }
  setPlayer(player) {
    this.setState({
      player,
    })
  }
  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div
        key={index}
        className="game__box"
        onClick={() => this.handleClick(index)}
      >
        {box}
      </div>
    ))
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null),
    })
  }
  render() {
    return (
      <div className="game__container">
        <h1>TIC TAC TOE</h1>
        <GameStatus
          player={this.state.player}
          setPlayer={e => {
            this.setPlayer(e)
          }}
          winner={this.state.winner}
        />

        <div className="game__board">{this.renderBoxes()}</div>
        <button disabled={!this.state.winner} onClick={() => this.reset()}>
          RESET
        </button>
      </div>
    )
  }
}

export default TicTacToe