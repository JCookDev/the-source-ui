import React from "react";
import { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "../components/Form/Form";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "./NavBar/NavBar";
import { getMusic, postMusic, deleteMusic } from "./APIcalls/APIcalls";
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
        this.setState({ music: data.tracks });
      })
      .catch((error) => {
        this.setState({ error: "Oops, something went wrong. Please try again later." });
      });
  }

  addMusic = (newMusic) => {
    postMusic(newMusic)
    .then((data) => {
      this.setState({ music: [...this.state.music, data] });
    })
    .catch( err => {
      this.setState({error: err})
    })
  };

  removeTrack(id) {
    deleteMusic(id)
      .then(response => {
        if (response.ok) {
          const filteredIdeas = this.state.music.filter(idea => idea.id !== id);
          
          this.setState({ ideas: filteredIdeas, error: '' });
        } else {
          this.setState({ error: `There was a problem deleting that idea!` })
        }
      })
  }

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
                <Tracks music={this.state.music} removeTrack={this.removeTrack} />
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
