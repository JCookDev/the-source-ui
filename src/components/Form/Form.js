import { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      coverart: "", 
      artist: "",
      genre: "",
      title: "",
      audiofile: ""
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitMusic = event => {
    event.preventDefault()
    const newMusic = {
      id: Date.now(),
      ...this.state
    }
    this.props.addMusic(newMusic)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({coverart: "", artist: "", genre: "", title: "", audiofile: ""})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter Cover Art URL"
          name="coverart"
          value={this.state.coverart}
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
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="R&B">R&B</option>
          <option value="Blues">Blues</option>
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
          name="audiofile"
          value={this.state.audiofile}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitMusic(event)}>Submit my Music!</button>
      </form>
    )
  }
}

export default Form;