import { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      coverart: "",
      artist: "",
      genre: "",
      title: "",
      audiofile: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitMusic = (event) => {
    const newMusic = {
      ...this.state,
    };
    this.props.addMusic(newMusic);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({ coverart: "", artist: "", genre: "", title: "", audiofile: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter Cover Art URL"
          name="coverart"
          value={this.state.coverart}
          onChange={(event) => this.handleChange(event)}
          required
        />

        <input
          type="text"
          placeholder="Enter Artist Name"
          name="artist"
          value={this.state.artist}
          onChange={(event) => this.handleChange(event)}
          required
        />

        <select name="genre" id="genre" onChange={(event) => this.handleChange(event)}>
          <option value="">Choose your Genre...</option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="R&B">R&B</option>
          <option value="Blues">Blues</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Electronic">Electronic</option>
          <option value="Jazz">Jazz</option>
          <option value="Indie">Indie</option>
          <option value="FilmScore">FilmScore</option>
          <option value="Classical">Classical</option>
          <option value="Chillout">Chillout</option>
          <option value="Ambient">Ambient</option>
          <option value="Folk">Folk</option>
          <option value="Metal">Metal</option>
          <option value="Latin">Latin</option>
          <option value="Reggae">Reggae</option>
          <option value="Punk">Punk</option>
          <option value="Country">Country</option>
          <option value="House">House</option>
          <option value="Techno">Techno</option>
        </select>

        <input
          type="text"
          placeholder="Enter Song Title"
          name="title"
          value={this.state.title}
          onChange={(event) => this.handleChange(event)}
          required
        />

        <input
          type="text"
          placeholder="Enter Audio File Link"
          name="audiofile"
          value={this.state.audiofile}
          onChange={(event) => this.handleChange(event)}
          required
        />
        <button
          className="submitMusicButton"
          onClick={(event) => this.submitMusic(event)}
          disabled={
            !this.state.coverart ||
            !this.state.artist ||
            !this.state.genre ||
            !this.state.title ||
            !this.state.audiofile
          }
        >
          Submit my Music!
        </button>
      </form>
    );
  }
}

export default Form;
