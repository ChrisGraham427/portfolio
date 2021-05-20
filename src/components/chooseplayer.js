import React, { Component } from "react"

class Player extends Component {
  handleForm(e) {
    e.preventDefault()
    this.props.player(e.target.player.value)
  }
  render() {
    return (
      <form className="game__form" onSubmit={e => this.handleForm(e)}>
        <h3 className="game__form-title">Choose Your Player</h3>
        <label className="game__form-label">
          PLAYER "X"
          <input
            className="game__form-input"
            type="radio"
            name="player"
            value="X"
          />
        </label>
        <label className="game__form-label">
          PLAYER "O"
          <input
            className="game__form-input"
            type="radio"
            name="player"
            value="O"
          />
        </label>
        <input className="game__button" type="submit" value="START" />
      </form>
    )
  }
}
export default Player
