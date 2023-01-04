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

  render() {
    return (
      <form>
        <p>HELLO!!!!!!!!!!!!</p>
      </form>
    )
  }
}

export default Form;