import React, { Component } from "react";
import axios from "axios";

class Players extends Component {
  state = { playerData: [] };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({ playerData: response.data });
        console.log(this.state.playerData);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="player-container">
        {this.state.playerData.map(player => (
          <div className="player-card" key={player.id}>
            <h1>{player.name}</h1>
            <h3>{player.country}</h3>
            <p>Searches: {player.searches}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Players;
