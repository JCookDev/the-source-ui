import React from "react";
import { Component } from "react";
import Tracks from "../components/Tracks/Tracks";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      music: [
        {
          id: 1,
          coverArt: "image",
          artist: "Future",
          genre: "Hip-Hop",
          title: "Puffin On Zooties",
          audioFile: "file",
        },
        {
          id: 2,
          coverArt: "image",
          artist: "Miss Aphrodite",
          genre: "R&B",
          title: "Your Hands",
          audioFile: "file",
        },
        {
          id: 3,
          coverArt: "image",
          artist: "Bobby Blue Bland",
          genre: "Blues",
          title: "Ain't No Sunshine When Shes Gone",
          audioFile: "file",
        },
      ],
    };
  }

  render() {
    return (
      <main className="App">
        <h1>The Source</h1>
        <h3>Hip-Hop</h3>
        <Tracks music={this.state.music} />
        <h3>R&B</h3>
        <Tracks music={this.state.music} />
        <h3>Blues</h3>
        <Tracks music={this.state.music} />
      </main>
    );
  }
}

export default App;
