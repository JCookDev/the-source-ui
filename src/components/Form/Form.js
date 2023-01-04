import { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      coverArt: "", 
      artist: "",
      genre: "",
      title: "",
      audioFile: "",
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter Cover Art URL"
          name="coverArt"
          value={this.state.coverArt}
          onChange={event => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="Enter Artist Name"
          name="artist"
          value={this.state.artist}
          onChange={event => this.handleChange(event)}
        />

        <select name="genre" id="genre" onChange={event => this.handleChange(event)}>
          <option value="">Choose your Genre...</option>
          <option value="hipHop">Hip-Hop</option>
          <option value="r&B">R&B</option>
          <option value="blues">Blues</option>
        </select>

        <input
          type="text"
          placeholder="Enter Song Title"
          name="title"
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="Enter Audio File Link"
          name="audioFile"
          value={this.state.audioFile}
          onChange={event => this.handleChange(event)}
        />

        <button>Submit my Music!</button>
      </form>
    )
  }
}

export default Form;