import './scss/main.scss'

import React, { Component } from 'react'

import Card from './components/commons/card.js'
import Input from './components/commons/input.js'

import {accessKey, secretKey} from './secrets.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accessToken: '',
      refreshToken: '',
      tokenType: ''
    }
    this.oAuth = this.oAuth.bind(this)
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
        'Authorization': 'Client-ID ' + accessKey
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
    let redirectURI = 'https://unsplash.com/oauth/authorize?client_id='+ accessKey +'&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections'
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
        'client_id': accessKey,
        'client_secret': secretKey,
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

  render () {
    return (
      <div className="">
        <Card
          title="What is your access key?"
          content={
            <Input
              response={this.updateAccessKey}
              text="Submit"
            />
          }
        />
      </div>
    )
  }
}

export default App;
