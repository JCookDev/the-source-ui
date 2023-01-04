import React from "react";
import { Component } from "react";
import { Route, Link } from "react-router-dom";
import Form from "../components/Form/Form";
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
      <main className="App">
        <header>
          <Link to="/">
            <h1>The Source</h1>
          </Link>
        </header>
        <Route exact path="/">
          <Link to= "/form" >
            <button className="addMusicButton">Add my Music!</button>
          </Link>
          <Tracks music={this.state.music} />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
      </main>
    );
  }
}

export default App;
