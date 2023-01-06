import React from "react";
import { Component } from "react";
import { Route, Link } from "react-router-dom";
import Form from "../components/Form/Form";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "./NavBar/NavBar";
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
    fetch('http://localhost:3001/music')
      .then(response => response.json())
      .then(data => this.setState({ music: data.music}))
      .catch(error => this.setState({error:"Oops, something went wrong. Please try again later."}))
  }

  addMusic = (newMusic) => {
    this.setState({ music: [...this.state.music, newMusic]})
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Tracks music={this.state.music}/>
        </main>
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
      </div>
    );
  }
}

export default App;
