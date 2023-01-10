import React from "react";
import { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "../components/Form/Form";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "./NavBar/NavBar";
import { getMusic, postMusic } from "./APIcalls/APIcalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      music: [],
    };
  }

  componentDidMount() {
    getMusic()
      .then((data) => {
        // console.log("DATA HERE======", data)
        console.log("DATA.TRACKS======", data.tracks)
        this.setState({ music: data.tracks });
      })
      .catch((error) => {
        this.setState({ error: "Oops, something went wrong. Please try again later." });
      });
  }

  addMusic = (newMusic) => {
    postMusic(newMusic)
    .then((data) => {
      console.log("data HERE----", data)
      this.setState({ music: [...this.state.music, data] });
    })
    .catch( err => {
      this.setState({error: err})
      // console.log(err.statusText)
    })
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          {this.state.error ? (
            <h2>{this.state.error}</h2>
          ) : (
            <Switch>
              <Route exact path="/">
                <Link to="/form">
                  <button className="addMusicButton">Add my Music!</button>
                </Link>
                <Tracks music={this.state.music} />
              </Route>
              <Route exact path="/form">
                <Form addMusic={this.addMusic} />
              </Route>
            </Switch>
          )}
        </main>
      </div>
    );
  }
}

export default App;
