import React from "react";
import { Component } from "react";
import { Route, Link } from "react-router-dom";
import Form from "../components/Form/Form";
import Tracks from "../components/Tracks/Tracks";
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
      .then(data => {
        this.setState({ music: data.music})
      })
      .catch(error => {
        this.setState({error:"Oops, something went wrong. Please try again later."})
      })
  }

  addMusic = (newMusic) => {
    postMusic(newMusic)
    .then(data => {
      if(data.id) {
        this.setState({ music: [...this.state.music, data], error: ""})
      } else {
        this.setState({error:"Oops, something went wrong. Please try again later."})
      }
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <Link to="/">
            <h1>The Source</h1>
          </Link>
        </header>
        {this.state.error ? <h2>{this.state.error}</h2> : 
        <Route exact path="/">
          <Link to= "/form" >
            <button className="addMusicButton">Add my Music!</button>
          </Link>
          <Tracks music={this.state.music} />
        </Route>}
        <Route exact path="/form">
          <Form addMusic={this.addMusic} />
        </Route>
      </main>
    );
  }
}

export default App;
