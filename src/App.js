import React, { Component } from 'react';
import Input from './input.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: ''
    }

    this.fetch = this.fetch.bind(this)
    this.updateKey = this.updateKey.bind(this)
  }

  updateKey(newKey) {
    this.setState({
      key: newKey
    })

    localStorage.setItem('key', newKey);
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  componentDidMount() {
    this.setState({
      key: localStorage.getItem('key')
    })
  }

  fetch () {
    fetch('https://api.unsplash.com/photos/', {
      headers: {
        'Authorization': 'Client-ID ' + this.state.key
      }
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
  }

  render() {
    return (
      <div>
        <Input
          updateKey={this.updateKey}
        />
        <button onClick={this.fetch}>fetch</button>
      </div>
    );
  }
}

export default App;
