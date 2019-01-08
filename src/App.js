import React, { Component } from 'react';
import Input from './input.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accessKey: '',
      secretKey: '',
      accessToken: '',
      refreshToken: '',
      tokenType: ''
    }

    this.updateAccessKey = this.updateAccessKey.bind(this)
    this.updateSecretKey = this.updateSecretKey.bind(this)
    this.oAuth = this.oAuth.bind(this)
  }

  updateAccessKey(newAccessKey) {
    this.setState((state = this.state) => state.accessKey = newAccessKey)
  }

  updateSecretKey(newSecretKey) {
    this.setState((state = this.state) => state.secretKey = newSecretKey)
  }

  saveStateInStorage() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  componentDidUpdate () {
    this.saveStateInStorage.bind(this)()
  }

  componentDidMount() {
    const state = localStorage.getItem('state')
    this.setState(JSON.parse(state))
  }

  unloggedRequest() {
    fetch('https://api.unsplash.com/photos/', {
      headers: {
        'Authorization': 'Client-ID ' + this.state.accessKey
      }
    })
    .then((res) => res.json())
  }

  oAuth() {
    // fetch('https://unsplash.com/oauth/authorize', {
    //   headers: {
    //     'client_id': this.state.accessKey,
    //     'redirect_uri': 'htpp://localhost:3000',
    //     'response_type': 'code',
    //     'grant_type': 'public',
    //     'Accept-Version': 'v1'
    //   }
    // })
    // .then((res) => res)
  }

  redirect() {
    let redirectURI = 'https://unsplash.com/oauth/authorize?client_id='+ this.state.accessKey +'&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections'

    window.location = redirectURI
  }

  getResponseCode() {
    const url = new URL(window.location.href)
    return url.searchParams.get('code')
  }

  getToken() {
    fetch('https://unsplash.com/oauth/token', {
      method: 'POST',
      headers: {
        'Accept-Version': 'v1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'client_id': this.state.accessKey,
        'client_secret': this.state.secretKey,
        'redirect_uri': 'http://localhost:3000',
        'code': this.getResponseCode(),
        'grant_type': 'authorization_code'
      })
    })
    .then(res => res.json())
    .then(
      res => this.setState((state = this.state) => {
        state.accessToken = res.access_token
        state.refreshToken = res.refresh_token
        state.tokenType = res.token_type
        return state
      })
    )
  }

  debug () {
    console.log(this.state)
    console.log(JSON.parse(localStorage.getItem('state')))
  }

  render() {
    return (
      <div>
        <Input
          text='Update Access Key'
          response={this.updateAccessKey}
        />
        <Input
          text='Update Secret Key'
          response={this.updateSecretKey}
        />
        <button onClick={this.redirect.bind(this)}>Get Access code</button>
        <button onClick={this.getToken.bind(this)}>Get Token</button>
        <button onClick={this.debug.bind(this)}>Debug</button>
      </div>
    );
  }
}

export default App;
