import React from "react";
import { Component } from "react";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "./NavBar/NavBar";
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
          artist: "Bob Marley",
          genre: "Hip-Hop",
          title: "Sprite",
          audioFile: "file",
        },
        {
          id: 3,
          coverArt: "image",
          artist: "Miss Aphrodite",
          genre: "R&B",
          title: "Your Hands",
          audioFile: "file",
        },
        {
          id: 4,
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
      <div className="App">
        <NavBar />
        <main>
          <Tracks music={this.state.music}/>
        </main>
      </div>
    );
  }
}

export default App;
